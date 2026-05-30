const FeedbackForm = require("../models/feedback-form-model");

class FeedbackFormRepository {
  async create(data) {
    return await FeedbackForm.create(data);
  }

  async findAll() {
    return await FeedbackForm.find()
      .populate("customerName")
      .populate("userName")
      .populate("department")
      .populate("technicianName")
      .sort({ createdAt: -1 });
  }

  async findById(id) {
    return await FeedbackForm.findById(id)
      .populate("customerName")
      .populate("userName")
      .populate("department")
      .populate("technicianName");
  }

  async update(id, data) {
    return await FeedbackForm.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async delete(id) {
    return await FeedbackForm.findByIdAndDelete(id);
  }
}

module.exports = new FeedbackFormRepository();