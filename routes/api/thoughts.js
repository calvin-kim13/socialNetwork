const router = require("express").Router();

const {
  addThought,
  getAllThoughts,
  getOneThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(addThought);

router
  .route("/:id")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:id/reactions").post(addReaction);

router.route("/:id/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
