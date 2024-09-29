/**
 * Compare the encrypted password with the password entered by the user
 * step: passport.use -> passport.serializeUser
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { findUserByUsername, findUserByID } = require('../models/core/auth_md');
const { pool } = require('./DB_Setting');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await findUserByUsername(username);
      if (user == null) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// If the login verification is passed, the user id is put into the session
passport.serializeUser((user, done) => {
  done(null, user.uid);
});

// (It'll be used in requested by user when logged in) Use user id to find user information in the database
passport.deserializeUser(async (uid, done) => {

  try {
    const result = await findUserByID(uid);
    done(null, result.rows[0]);
  } catch (err) {
    done(err);
  }
});


