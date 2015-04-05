var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
   name: {type: String, required: 'Please provide a team name'},
   email: {type: String, required: 'Please provide an email'},
   race: {type: Number}
});
 
var Team = mongoose.model('Team', teamSchema);


module.exports = {
    Team: Team
}
