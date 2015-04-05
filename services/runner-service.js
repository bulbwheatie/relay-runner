var Runner = require('../models/runner');

//Add a new Runner
exports.addRunner = function(runner, next) {
    var newRunner = new Runner({
        teamID: runner.teamID,
        name: runner.name,
        age: runner.age,
        gender: runner.gender,
        phone: runner.phone
    });
    
    newRunner.save(function(err) {
        if (err) {
            return next(err);
        }
        next(null);
    });
}

//Find a runner by name and teamID
exports.findRunner = function(name, teamID, next) {
    Runner.findOne({name:name, teamID: teamID}, function(err, currRunner) {
        return next(err, currRunner);
    });
}