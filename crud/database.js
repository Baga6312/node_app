const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'testing',
	user : 'root',
	password : ''
});

connection.connect(function(error){
	if(error)
	{
        console.log ('MySQL Database is not connected') ;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;