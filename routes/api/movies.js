const router = require("express").Router();
const moviesController = require("../../controllers/moviesController");

// Matches with "/api/books"
router.route("/")
  .get(moviesController.findAll)
  .post(moviesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(moviesController.findById)
  .put(moviesController.update)
  .delete(moviesController.remove);

module.exports = router;
