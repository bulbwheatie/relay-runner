var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var runnerSchema = new Schema({
    teamID: {type: Number, required: 'Runner must be associated with a team'},
    name: {type: String, required: 'Please provide a name'},
    age: {type: Number},
    gender: {type: String},
    phone: {type: Number}
});

var Runner = mongoose.model('Runner', runnerSchema);

module.exports = {
    Runner: Runner
};