const ConnectionPool = require("./connectionPool");
const SELECT_COUNT_SQL = require("./sql").SELECT_COUNT_SQL;

module.exports = async function (context) {
  const connection = await ConnectionPool.getConnection(context);
  const result = await connection.request().query(SELECT_COUNT_SQL);
  context.res = {
    body: result.recordset[0].count,
  };
};
