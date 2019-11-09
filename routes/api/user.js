const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const User = require("../../models/user")

//signin routing
router.post("/signin", passport.authenticate("local"), (req, res) => {
  let userData = {
    username: req.user.username,
    email: req.user.email
  };
  res.send(userData);
});



// Matches with "/api/users"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
