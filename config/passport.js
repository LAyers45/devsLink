const User = require("../models/user.js");

module.exports = function (passport) {
    const LocalStrategy = require("passport-local").Strategy

    passport.use(new LocalStrategy(
        function (username, password, done) {
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: "Username is Incorrect." })
                }
                if (!user.passwordConfirm(password)) {
                    return done(null, false, { message: "Password is Incorrect." })
                }
                return done(null, user);
            });
            passport.serializeUser(function (user, done) {
                done(null, user)
            });
            passport.deserializeUser(function (user, done) {
                done(null, user)
            });
        }
    ))
}