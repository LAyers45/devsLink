const router = require("express").Router();
const devsController = require("../../controllers/devsContoller");

// Matches with "/api/devs"
router.route("/")
    .get(devsController.findAll)
    .post(devsController.create);

// Matches with "/api/devs/:id"
router.route("/:id")
    .put(devsController.update)
    .delete(devsController.remove);

// allows query
router.get("/devs", (req, res) => {
    axios
        .get({ params: req.query })
        .then(({ data: { results } }) => res.json(results));
})



module.exports = router;