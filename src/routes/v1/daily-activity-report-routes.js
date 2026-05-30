// =====================================
// routes/v1/daily-activity-report-routes.js
// =====================================

const express = require("express");

const router = express.Router();

const controller = require(
  "../../controllers/daily-activity-report-controller"
);

// =====================================
// CREATE
// =====================================

router.post(
  "/",
  controller.createDailyActivityReport
);

// =====================================
// GET ALL
// =====================================

router.get(
  "/",
  controller.getAllDailyActivityReport
);

// =====================================
// GET BY ID
// =====================================

router.get(
  "/:id",
  controller.getDailyActivityReportById
);

// =====================================
// UPDATE
// =====================================

router.put(
  "/:id",
  controller.updateDailyActivityReport
);

// =====================================
// DELETE
// =====================================

router.delete(
  "/:id",
  controller.deleteDailyActivityReport
);

module.exports = router;