const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
// const dataConnect = require("./config/")
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

const session = require('express-session');

app.use(express.static("public"));
app.use(session({ secret: "batman", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
app.use((req, res, next) => {
  // console.log("req.session", req.session);
  // console.log("req.user", req.user);

  return next();
})


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds031657.mlab.com:31657/heroku_n5lq3fjs");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
