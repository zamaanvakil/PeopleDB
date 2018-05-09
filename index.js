const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/persondb');
mongoose.Promise = global.Promise;  

app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);

//error handling
app.use(function(err,req,res,next){
	//console.log(err);
	res.send({error: err.message});
});

app.listen(4000,function(){
	console.log("listening for requests!");
});

