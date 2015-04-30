var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var runnerService = require('../services/runner-service.js');
var relayService = require('../services/relay-service.js');

router.post('/createRunner', restrict, function(req, res, next) {
   console.log("Attempting to add runner");
   console.log("Team: " + req.user.teamName);
   console.log("Team: " + req.user._id);
   req.body.teamID = req.user._id;
   runnerService.addRunner(req.body, function(err, runner) {
      if (err) {
         return err;
      }
      console.log("Added the runner");
      return res.json(runner);
   });
});

router.get('/allRunners', restrict, function(req, res, next) {
   runnerService.findTeamRunners(req.user._id, function(err, runners) {
      console.log("Getting runners")
      if(err) {
         console.log(err);
         return err;
      }
      console.log(runners);
      res.json(runners);
   });
});


router.get('/allLegs', restrict, function(req, res, next) {
   relayService.findAllLegs(req.race, function(err, legs) {
      if (err) {
         return err;
      }
      return legs;
   });
});

router.get('/allTeamLegs', restrict, function(req, res, next) {
   relayService.findTeamLegs(req.race, req.date, req.team, function(err, teamLegs) {
      if(err) {
         return err;
      }
      return teamLegs;
   })
})

router.get('/raceInfo', restrict, function(req, res, next) {
   relayService.findRace(req.race, function(err, info) {
      if (err) {
         return err;
      }
      return info;
   })
})

router.post('/admin/addRace', restrict, function(req, res, next) {
   console.log("API: ADDRACE");
   relayService.addRace(req.body, function(err, race) {
      if (err) {
         return err;
      }
      return res.json(race);
   });
})

router.post('/admin/addRaceLeg', restrict, function(req, res, next) {
   relayService.addRaceLet(req.body, function(err, leg) {
      if(err) {
         return err;
      }
      return res.json(leg);
   });
})
module.exports = router;