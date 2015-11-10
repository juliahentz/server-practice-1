var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({

	title		: String,
	description	: String,
	timeStamp	: {type: Date, default: Date.now},
	imageUrl	: String 

});

var Project = mongoose.model('Project', projectSchema);