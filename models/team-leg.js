var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamLegSchema = new Schema ({
   leg: {type: String, required: 'Please specify which leg is being run'},
   team: {type: String, required: 'Please provide a team'},
   race: {type: String, required: 'Please provide a race'},
   year: {type: Date},
   distance: {type: Number},
   elevation: {type: Number},
   order: {type: Number},
   runner: {type: String},
   timeEstimate: {type: Number},
   timeActual: {type: Number},
   completed: {type: Boolean}
});

var TeamLeg = mongoose.model('TeamLeg', teamLegSchema);

module.exports = {
    TeamLeg: TeamLeg
};