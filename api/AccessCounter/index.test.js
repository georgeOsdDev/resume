const httpFunction = require("./index");
const SELECT_COUNT_SQL = require("./sql").SELECT_COUNT_SQL;
const context = require("../testing/defaultContext");

jest.mock("./connectionPool");
const ConnectionPool = require("./connectionPool");

const mockedQueryFn = jest
  .fn(async (sql) => ({ recordset: [{ count: 100 }] }))
  .mockImplementationOnce(async (sql) => ({ recordset: [{ count: 10 }] }))
  .mockImplementationOnce(async (sql) => ({ recordset: [{ count: 11 }] }));

test("Http trigger should return sql result", async () => {
  ConnectionPool.getConnection.mockResolvedValue({
    request: () => ({
      query: mockedQueryFn,
    }),
  });
  await httpFunction(context);
  expect(context.res.body).toEqual(10);

  await httpFunction(context);
  expect(context.res.body).toEqual(11);

  await httpFunction(context);
  expect(context.res.body).toEqual(100);

  expect(mockedQueryFn).toHaveBeenCalledWith(SELECT_COUNT_SQL);
});
