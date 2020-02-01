const mysql = require("mysql")

const db = mysql.createConnection({
	host: "db",
	user: "root",
	password: "abc123",
	database: "myDB"
})

exports.getAllHumans = function(callback){
	
	db.query("SELECT * FROM humans", function(error, humans){
		// TODO: Also handle errors.
		callback(humans)
	})
	
}

exports.createHumans = function(username, age){
	
}