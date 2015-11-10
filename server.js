var express = require('express');
var app = express();
var mongoose = require('mongoose');


function start(){
	
	app.use('/', express.static('public'));

	app.use('/api/cms', express.static('cms'));

	app.listen(3000, function(){

		console.log('server is running')

	});

};


start();