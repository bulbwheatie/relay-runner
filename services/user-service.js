var User = require('../models/user').User;
var Leg = require('../models/leg').Leg;
var TeamLeg = require('../models/team-leg').TeamLeg;
var bcrypt = require('bcrypt');

exports.addUser = function(user, next) {
    
    bcrypt.hash(user.password, 10, function(err, hash) {
        
        if(err){
            next(err);
        }
        var newUser = new User({
            teamName: user.teamName,
            email: user.email.toLowerCase(),
            password: hash,
            race: user.race
        });
        
        newUser.save(function(err) {
            if (err) {
                return next(err);
            }
            next(null);
        });
    });
};

exports.findUser = function(email, next) {
    User.findOne({email: email.toLowerCase()}, function(err, user) {
       next(err, user); 
    });
};

exports.registerRace = function(user_id, race, next) {
    console.log("Registering race");
    User.update({_id:user_id}, {race: race}, function(err) {
        next(err);
    });
    
    //Remove all legs that are already associated with this team
    TeamLeg.remove({team:user_id}, function(err) {
        if (err) {
            next(err); 
        }
    });
    
    console.log("Adding team legs");
    //Add team legs for each leg associated with this race
    Leg.find({raceId:race}, function(err, raceLegs) {
        if (err) {
            next(err);
        }
        
        console.log("Found all the legs for this race: " + raceLegs.length);
        for (var i = 0; i < raceLegs.length; i++) {
            var raceLeg = raceLegs[i];
            console.log("RaceLeg " + raceLeg);
            console.log("Adding team leg for leg " + raceLeg.order);
            var newTeamLeg = new TeamLeg ({
                leg: raceLeg._id,
                team: user_id,
                race:race,
                order: raceLeg.order,
                distance: raceLeg.distance,
                elevation: raceLeg.elevation
            });
            console.log("Created new race leg");
            newTeamLeg.save(function(err) {
                if (err) {
                    console.log(err);
                }
                console.log("Saved new team race leg");
            });
        }
        console.log("Added all the team legs");
    });
    next(null);
}