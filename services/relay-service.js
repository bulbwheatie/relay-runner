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
    var newLeg = new Leg({
        race: leg.race,
        distance: leg.distance,
        elevation: leg.elevation,
        order: leg.number
    });
    newLeg.save(function(err) {
        if(err) {
            console.log(err);
            return next(err);
        }
        next(null);
    });
    
}

exports.findRace = function(name, date, next) {
    Race.findOne({name: name, date:date}, function(err, race){
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

exports.findTeamLegs = function(raceName, date, team, next) {
    TeamLeg.find({race:raceName, date:date, team: team}, function(err, teamLegs) {
        next(err, teamLegs);
    })
}
