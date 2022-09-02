var express = require('express');
var router = express.Router();


const squatsCtrl = require('../controllers/squats')


router.get('/', function(req, res, next) {
  res.render('../views/index');
});

router.get('/squats/workouts', function(req, res, next) {
  res.render('../views/squats/index');
})

router.get('/squats/user', function(req, res, next) {
  res.render('../views/squats/new');
})

// router.get('/new', squatsCtrl.new);
// router.post('/squats', isLoggedIn, squatsCtrl);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
};



module.exports = router;
