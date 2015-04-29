var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamLegSchema = new Schema ({
   leg: {type: Number, required: 'Please specify which leg is being run'},
   team: {type: String, required: 'Please provide a team'},
   race: {type: String, required: 'Please provide a race'},
   year: {type: Date, required: 'Please provide a date'},
   runner: {type: Number},
   timeEstimate: {type: Number},
   timeActual: {type: Number},
   completed: {type: Boolean}
});

var TeamLeg = mongoose.model('TeamLeg', teamLegSchema);

module.exports = {
    TeamLeg: TeamLeg
};