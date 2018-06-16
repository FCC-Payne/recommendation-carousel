var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
});

con.connect((err)=>{
  if (err) {
    throw err;
  }
  console.log('Connected to db!');
});

module.exports = con;
