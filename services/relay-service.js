var Race = require('../models/race').Race;
var Leg = require('../models/leg').Leg;
var TeamLeg = require('../models/team-leg').TeamLeg;


exports.addRace = function(race, next) {
    var newRace = new Race({
       name: race.name,
       location: race.location,
       date: race.date,
       length: race.length,
       website: race.website
    });
    
    newRace.save(function(err) {
        if (err) {
            console.log(err);
            return next(err, null);
        }
        next(null, newRace);
    });
}

exports.addRaceLeg = function(leg, next) {
    console.log("Adding new race leg with race id " + leg.race);
    var newLeg = new Leg({
        raceId: leg.race,
        distance: leg.distance,
        elevation: leg.elevation,
        order: leg.number
    });
    newLeg.save(function(err) {
        if(err) {
            console.log(err);
            return next(err, null);
        }
        next(null, newLeg);
    });
    
}

exports.findAllRaces = function(next) {
    Race.find({},function (err, races) {
        next(err, races);
    })
}

exports.findRace = function(raceId, next) {
    Race.findOne({id: raceId}, function(err, race){
        next(err, race);
    });
}

exports.findRaceLegs = function(raceName, date, next) {
    Leg.find({race:raceName, date: date}, function(err, legs) {
        next(err, legs);
    });
}

exports.findLeg = function(legID, next) {
    Leg.find({id:legID}, function(err, leg) {
        next(err, leg);
    })
}

exports.findTeamLegs = function(team, next) {
    console.log("Fetching all team legs for " + team);
    TeamLeg.find({team: team}).populate("leg")
        .exec(function(err, teamLegs) {
            next(err, teamLegs);
        });
}


exports.assignRunnerToLeg = function(teamLeg, runner, next) {
    console.log("Assigning runner to leg");
    TeamLeg.update({_id: teamLeg}, {runner:runner}, function(err) {
        next(err);
    });
    console.log("Updated runner");
    next(null);
}