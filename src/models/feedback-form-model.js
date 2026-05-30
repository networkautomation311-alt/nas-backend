// =====================================
// models/feedback-form-model.js
// =====================================

const mongoose = require("mongoose");

const feedbackFormSchema = new mongoose.Schema(
  {
    // =====================================
    // DATE OF FEEDBACK
    // =====================================
    dateOfFeedback: {
      type: Date,
      required: true,
    },

    // =====================================
    // CST (Customer Service Technician)
    // =====================================
    cst: {
      type: String,
      trim: true,
      required: true,
    },

    // =====================================
    // CET (Customer Engineering Technician)
    // =====================================
    cet: {
      type: String,
      trim: true,
      required: true,
    },

    // =====================================
    // SHEET NUMBER
    // =====================================
    sheetNo: {
      type: String,
      trim: true,
      required: true,
    },

    // =====================================
    // CUSTOMER NAME
    // =====================================
    customerName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomerMaster",
      required: true,
    },

    // =====================================
    // USER NAME (Person filling the feedback)
    // =====================================
    userName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // =====================================
    // DEPARTMENT
    // =====================================
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    // =====================================
    // TECHNICIAN NAME
    // =====================================
    technicianName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TechnicianMaster",
      required: true,
    },

    // =====================================
    // FEEDBACK SCORE
    // =====================================
    feedbackScore: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },

    // =====================================
    // COMMENTS OR REMARKS
    // =====================================
    comments: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const FeedbackForm = mongoose.model("FeedbackForm", feedbackFormSchema);

module.exports = FeedbackForm;