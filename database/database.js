var mysql = require('mysql')

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rtr'
});

con.connect((err)=>{
	if (err) {
		throw err
	};
	console.log("Connected to db!")
});

// con.connect((err) => {
// 	if (err) throw err;
// 	console.log("Connected!")
// 	con.query("SELECT * FROM products WHERE id = 5", function (err, result){
// 		if (err) throw err;
// 		console.log("Result", result);
// 	})
// });

module.exports = con;