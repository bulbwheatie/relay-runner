var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var raceSchema = new Schema({
   name: {type: String, required: 'Please provide a race name'},
   location: {type: String, required: 'Please provide a race location'},
   date: {type: Date, required: 'Please provide a race date'},
   length: {type: Number},
   website: {type: String},
   description: {type:String}
});

var Race = mongoose.model('Race', raceSchema);

module.exports = {
    Race: Race
}