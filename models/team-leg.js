var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamLegSchema = new Schema ({
   leg:  { type: Schema.Types.ObjectId, ref: 'Leg' },
   team: {type: String, required: 'Please provide a team'},
   race: {type: String, required: 'Please provide a race'},
   year: {type: Date},
   runner: {type: Schema.Types.ObjectId, ref: 'Runner'},
   timeEstimate: {type: Number},
   timeActual: {type: Number},
   completed: {type: Boolean}
});

var TeamLeg = mongoose.model('TeamLeg', teamLegSchema);

module.exports = {
    TeamLeg: TeamLeg
};