const service = require("../services/call-assigning-service"); // <-- Fixed import for .js extension

// =====================================
// CREATE
// =====================================

const createCallAssigning = async (req, res) => {
  try {
    const data = await service.createCallAssigning(req.body);

    return res.status(201).json({
      success: true,
      message: "Call Assigning Created Successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// GET ALL
// =====================================

const getAllCallAssigning = async (req, res) => {
  try {
    const data = await service.getAllCallAssigning();

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// GET BY ID
// =====================================

const getCallAssigningById = async (req, res) => {
  try {
    const data = await service.getCallAssigningById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Call Assigning Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// UPDATE
// =====================================

const updateCallAssigning = async (req, res) => {
  try {
    const data = await service.updateCallAssigning(req.params.id, req.body);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Call Assigning Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Call Assigning Updated Successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// DELETE
// =====================================

const deleteCallAssigning = async (req, res) => {
  try {
    const data = await service.deleteCallAssigning(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Call Assigning Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Call Assigning Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCallAssigning,
  getAllCallAssigning,
  getCallAssigningById,
  updateCallAssigning,
  deleteCallAssigning,
};