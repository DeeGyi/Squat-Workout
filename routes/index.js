var express = require('express');
var router = require('express').Router();
const passport = require('passport');

router.post('/upload')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/squats');
});

// router.get('/squats/workouts', function(req, res, next) {
//   res.redirect
// })
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Squat Workout' });
// });
// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));



router.get('/squats/login/failed', (req,res) => {
  res.status(401).json({
    error:true,
    message:"Log in failure",
  });
});

// Google OAuth callback route
router.get('/squatoauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/squats',
    failureRedirect : '/squats/login/failed'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/squats');
});


module.exports = router;
