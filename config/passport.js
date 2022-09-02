const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Squat = require('../models/squat');


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Squat.findOne({ 'googleId': profile.id }, function(err, squat) {
      if (err) return cb(err);
      if (squat) {
        if (!squat.avatar) {
            squat.avatar = profile.photos[0].value;
            squat.save(function(err) {
        return cb(null, squat);
            });
        } else {
            return cb(null, squat);
          } 
      } else {
       
        var newSquat = new Squat({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newSquat.save(function(err) {
          if (err) return cb(err);
          return cb(null, newSquat);
        });
      }
    });
  }
));

passport.serializeUser(function(squat, done) {
    done(null, squat.id);
});

passport.deserializeUser(function(id, done) {
    Squat.findById(id, function(err, squat) {
      done(err, squat);
    });
  });

  