const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const User = require("../../models/user")

router.post("/signup", function (req, res) {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.json({
      success: false, msg: "All fields are required"
    });
  } else {
    let addUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    addUser.save(function (err) {
      if (err) {
        console.log(err)
        return res.json({
          success: false, msg: "User is already taken."
        });
      }
      res.json({
        success: true, msg: "User was successfully created"
      });
    });
  }
});

//user holding route
router.get("/", (req, res, next) => {
  console.log(" USER ");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null })
  }
});

//signin routing
router.post("/signin", passport.authenticate("local"), (req, res) => {
  let userData = {
    username: req.user.username,
    email: req.user.email
  };
  res.send(userData);
});




// Matches with "/api/users/:username"
router
  .route("/:username")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
