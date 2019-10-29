const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/devsearch")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/:username"
router.route("/:username")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
