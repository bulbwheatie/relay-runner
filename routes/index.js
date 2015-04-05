var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (res.user) {
        return res.redirect('/home');
    }
    
    res.render('index', { title: 'Relay runner' });
});

module.exports = router;
