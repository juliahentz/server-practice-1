var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./database');
var router = require('./router');


function start(){
	
	database.openDatabase(function(){

		setupModels();
		console.log('Database open successfully');


		app.use('/', express.static('public'));

		app.use('/cms', express.static('cms'));

		app.listen(3000, function(){

			router(app);

		});	

	});


};

function setupModels(){

	require('./models/projects');

};


start();