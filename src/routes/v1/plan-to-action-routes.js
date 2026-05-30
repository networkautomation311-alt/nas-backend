const express = require("express");

const router = express.Router();

const controller = require(
  "../../controllers/plan-to-action-controller"
);

// =====================================
// GET PLAN TO ACTION DATA
// =====================================

router.get(
  "/",
  controller.getPlanToActionData
);

module.exports = router;