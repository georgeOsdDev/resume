const sql = require("mssql");
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const createPool = () => {
  return new sql.ConnectionPool(sqlConfig)
    .connect()
    .then((conn) => conn)
    .catch((e) => e);
};
const poolPromise = createPool();

module.exports = {
  async getConnection(context) {
    let conn;
    try {
      conn = await poolPromise;
    } catch (e) {
      context.log("Failed to connect Database... retry after 100ms.");
      sleep(100);
      conn = await createPool();
    }
    return conn;
  },
};
