var mongoose = require('mongoose');

var db = mongoose.connection;

exports.openDatabase = function(cb){

	mongoose.connect('mongodb://localhost/server-practice-1');

	db.on('error', console.error.bind(console, 'connection error:'));

	db.once('open', function(){

		console.log('connection to database open');
		cb();

	});

};

exports.getDatabase = function(){

	return(db);

};