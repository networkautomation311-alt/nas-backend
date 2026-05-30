const express = require("express");
const router = express.Router();

const controller = require("../../controllers/feedback-form-controller");

// CREATE
router.post("/create", controller.createFeedback);

// GET ALL
router.get("/", controller.getAllFeedback);

// GET BY ID
router.get("/:id", controller.getFeedbackById);

// UPDATE
router.put("/:id", controller.updateFeedback);

// DELETE
router.delete("/:id", controller.deleteFeedback);

module.exports = router;