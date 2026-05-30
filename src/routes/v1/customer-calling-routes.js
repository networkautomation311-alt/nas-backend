// =====================================
// routes/customer-calling-routes.js
// =====================================

const express = require("express");

const router = express.Router();

const controller = require(
  "../../controllers/customer-calling-controller"
);

// =====================================
// ROUTES
// =====================================

router.post(
  "/",
  controller.createCustomerCalling
);

router.get(
  "/",
  controller.getCustomerCallings
);

router.get(
  "/:id",
  controller.getCustomerCalling
);

router.put(
  "/:id",
  controller.updateCustomerCalling
);

router.delete(
  "/:id",
  controller.deleteCustomerCalling
);

module.exports = router;