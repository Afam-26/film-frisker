const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/movies", bookRoutes);

module.exports = router;
