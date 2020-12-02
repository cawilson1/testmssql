const sql = require("mssql");
require("dotenv").config();

let pool;
(async () => {
  try {
    const config = {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: process.env.DB_SERVER,
      database: process.env.DB,
      options: {
        encrypt: true,
      },
    };
    pool = await sql.connect(config);
    console.log("connected", pool);
  } catch (error) {
    console.log(error);
  }
})();

