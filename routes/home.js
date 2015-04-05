var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

router.get('/', restrict, function(req, res, next) {
   var vm = {
       title: 'Home',
       teamName: req.user ? req.user.firstName: null
   } 
   res.render('home/index', vm);
});

module.exports = router;
