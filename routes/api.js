const express = require('express');
const router = express.Router();
const Person = require('../models/person');

//Fetch list of people
router.get('/person',function(req,res){
	Person.find({}).then(function(people){
		res.send(people);
	})
});

//Fetch a single person in db
router.get('/person/:id',function(req,res){
	console.log(req.params.id)
	Person.findOne({_id:req.params.id}).then(function(person){
		console.log(person)
		res.send(person);
	})
});

//Add new person
router.post('/person',function(req,res,next){
	Person.create(req.body).then(function(person){
		res.send(person);
	}).catch(next);
});

//Update a person in db
router.put('/person/:id',function(req,res,next){
	
	Person.findByIdAndUpdate({_id:req.params.id},req.body, {new: true}).then(function(person){
		res.send(person);
	});
});

//Delete a person from db
router.delete('/person/:id',function(req,res){
	Person.findByIdAndRemove({_id:req.params.id}).then(function(person){
		res.send(person);
	}); 
});

module.exports = router;