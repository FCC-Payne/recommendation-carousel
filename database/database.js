var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rtr'
});

con.connect((err)=>{
  if (err) {
    throw err;
  }
  console.log('Connected to db!');
});

module.exports = con;
