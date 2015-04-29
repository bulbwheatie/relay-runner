var Runner = require('../models/runner').Runner;

//Add a new Runner
exports.addRunner = function(runner, next) {
    var newRunner = new Runner({
        teamID: 1,
        name: runner.name,
        age: runner.age,
        gender: runner.gender,
        phone: runner.phone
    });
    
    console.log("New runner object created");
    
    newRunner.save(function(err) {
        if (err) {
            console.log(err)
            return next(err);
        }
        console.log("Runner save")
        next(newRunner);
    });
};

//Find a runner by name and teamID
exports.findRunner = function(name, teamID, next) {
    Runner.findOne({name:name, teamID: teamID}, function(err, currRunner) {
        return next(err, currRunner);
    });
};

//Finds all runners for a team
exports.findAllRunners = function(next) {
    Runner.find({}, function(err, runners) {

        return next(err, runners);
    });
};