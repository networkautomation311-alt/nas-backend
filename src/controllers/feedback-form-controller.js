const service = require("../services/feedback-form-service");

// CREATE
exports.createFeedback = async (req, res) => {
  try {
    const data = await service.createFeedback(req.body);
    res.status(201).json({
      success: true,
      message: "Feedback created successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
exports.getAllFeedback = async (req, res) => {
  try {
    const data = await service.getAllFeedback();
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET BY ID
exports.getFeedbackById = async (req, res) => {
  try {
    const data = await service.getFeedbackById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found",
      });
    }

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
exports.updateFeedback = async (req, res) => {
  try {
    const data = await service.updateFeedback(req.params.id, req.body);

    res.json({
      success: true,
      message: "Feedback updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteFeedback = async (req, res) => {
  try {
    await service.deleteFeedback(req.params.id);

    res.json({
      success: true,
      message: "Feedback deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};