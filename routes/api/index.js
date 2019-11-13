const router = require("express").Router();
const userRoutes = require("./user");
const projectRoute = require("./project.js")
const devRoute = require("./devs.js")

// User routes
router.use("/user", userRoutes);
router.use("/project", projectRoute);
router.use("/devs", devRoute)

module.exports = router;
