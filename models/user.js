var  mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
    teamName: {type: String, required: 'Please enter a user name'},
    email: {type: String, required: 'Please enter an email'},
    password: {type: String, required: 'Please enter a password'},
    created: {type: Date, default: Date.now},
    race: {type: String}
});

userSchema.path('email').validate(function(value, next) {
    userService.findUser(value, function(err, user) {
       if (err) {
           console.log(err);
           return next(false);
       } 
       next(!user);
    }); 
}, 'That user already exists!');
var User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};