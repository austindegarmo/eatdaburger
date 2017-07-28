var connection = require("..config/connection.js");

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	create: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO" + table;

		queryString += cols.toString();
		queryString += 

	}

}