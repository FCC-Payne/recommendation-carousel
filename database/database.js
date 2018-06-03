var mysql = require('mysql')

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!")
	con.query("CREATE DATABASE RTR", function (err, result){
		if (err) throw err;
		console.log("Result", result);
	})
})