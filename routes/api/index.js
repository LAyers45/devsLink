const router = require("express").Router();
const userRoutes = require("./user");
const projectRoute = require("./project.js")

// User routes
router.use("/user", userRoutes);
router.use("/project", projectRoute)

module.exports = router;
