const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const userSeed = [
  {
    username: "LAyers45",
    password: "password",
    email: "loganayers2013@yahoo.com",
    userCreated: new Date(Date.now()),
    specialization: "javascript",
    image: ""

  },
  {
    username: "DonRiche",
    password: "password",
    email: "hndgd1980@gmail.com",
    userCreated: new Date(Date.now()),
    specialization: "javascript",
    image: ""

  },
  {
    username: "Evan",
    password: "password",
    email: "EvanDavies11@gmail.com",
    userCreated: new Date(Date.now()),
    specialization: "javascript",
    image: ""

  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
