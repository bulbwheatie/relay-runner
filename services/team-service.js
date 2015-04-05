var Team = require('../models/team').Team;

//Teams are created by selecting a name and a race and are hence then identified by this two properties

exports.addTeam = function(team, next) {
    
    var newTeam = new Team({
       name: team.name.toLowerCase(), //validate that this team doesn't already exist?
       email: team.email.toLowerCase(),
       race: team.race //Do I need to look up the ID of this race?
    });
    
    newTeam.save(function(err) {
        if (err) {
            return next(err)
        }
        next(null);
    });
};

exports.editTeam = function(team, next) {
    //find the team
    Team.findOne({email: team.email.toLowerCase(), race:team.race}, function(err, currTeam) {
        if (err) {
            next(err);
        }
        //edit info
        currTeam.name = team.name;
        
        //resave info
        currTeam.save(function(err) {
            if (err) {
                return next(err);
            }
            next(null);
        });
    });
};

exports.findTeams = function(email, next) {
    Team.find({email: email.toLowerCase()}, function(err, team) {
        next(err, team);
    });
}

//TODO: DELETE TEAMS
exports.deleteTeam = function(team, next) {
    
}

