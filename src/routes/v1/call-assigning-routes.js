const express = require("express");

const router = express.Router();

const controller = require("../../controllers/call-assigning-controller");

// =====================================
// CREATE
// =====================================

router.post("/", controller.createCallAssigning);

// =====================================
// GET ALL
// =====================================

router.get("/", controller.getAllCallAssigning);

// =====================================
// GET BY ID
// =====================================

router.get("/:id", controller.getCallAssigningById);

// =====================================
// UPDATE
// =====================================

router.put("/:id", controller.updateCallAssigning);

// =====================================
// DELETE
// =====================================

router.delete("/:id", controller.deleteCallAssigning);

module.exports = router;