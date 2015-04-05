var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var legSchema = new Schema ({
    race: {type: Number, required: 'Please provide a race'},
    distance: {type: Number, required: 'Please provide the distanec of this leg'},
    elevation: {type: Number},
    order: {type: Number, required: 'Please provide the order number of this leg'}
});


var Leg = mongoose.model('Leg', legSchema);

module.exports = {
    Leg: Leg
}