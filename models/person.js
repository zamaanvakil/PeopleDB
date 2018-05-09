const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create person schema and model

const PersonSchema = new Schema({
	/*_id: {
		type: String
	},*/
	name: {
		type: String,
		required: [true,'Name is required']
	},
	age: {
		type: String
	},
	gender: {
		type: String
	},
	mobile_number: {
		type: String
	}
});

const Person = mongoose.model('person',PersonSchema);

module.exports = Person;