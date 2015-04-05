var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamLegSchema = new Schema ({
   leg: {type: Number, required: 'Please specify which leg is being run'},
   team: {type: Number, required: 'Please provide a team'},
   runner: {type: Number},
   timeEstimate: {type: Number},
   timeActual: {type: Number},
   completed: {type: Boolean}
});

var TeamLeg = mongoose.model('TeamLeg', teamLegSchema);

module.exports = {
    TeamLeg: TeamLeg
};