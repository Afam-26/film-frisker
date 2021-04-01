const router = require("express").Router();
const movieRoutes = require("./movies");

// Book routes
router.use("/movies", movieRoutes);

module.exports = router;
