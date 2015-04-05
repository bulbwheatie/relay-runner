var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');
var passport = require('passport');
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
    var vm = 'Create an account';
  res.render('users/create', vm);
});

router.get('/login', function(req, res, next) {
    var vm = {
        title: 'Login',
        error: req.flash('error')
    };
    res.render('users/login', vm);
})


router.post('/create', function(req, res, next) {
    userService.addUser(req.body, function(err) {
        if (err) {
            console.log(err);
            var vm = {
                title: 'Create an account',
                input: res.body,
                error: err
            };
            if (vm.input) {
                delete vm.input.password;
            }
            return res.render('users/create', vm);
        }
        res.redirect('/home');
    });
});

router.post('/login', function(req, res, next) {
    
        if (req.body.rememberMe) {
        req.session.cookie.maxAge = config.cookieMaxAge;
        }
        next();
    },
    passport.authenticate('local', {
    failureRedirect: '/users/login', 
    successRedirect:'/home',
    failureFlash: 'Invalid credentials'
})); 

router.get('/logout', function(req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
})

module.exports = router;
