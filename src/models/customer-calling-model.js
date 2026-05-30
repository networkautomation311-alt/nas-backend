// =====================================
// models/customer-calling-model.js
// =====================================

const mongoose = require("mongoose");

const customerCallingSchema = new mongoose.Schema(
  {
    // =====================================
    // AUTO SERIAL NUMBER
    // =====================================

    sNo: {
      type: Number,
      unique: true,
    },

    // =====================================
    // CALL NUMBER
    // =====================================

    callNo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CallEntry",
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
    // PERSON TO CONTACT
    // =====================================

    personToContact: {
      type: String,
      trim: true,
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
    // PERSON CONTACTED
    // =====================================

    personContacted: {
      type: String,
      trim: true,
      required: true,
    },

    // =====================================
    // DATE OF CALLING
    // =====================================

    dateOfCalling: {
      type: Date,
      required: true,
    },

    // =====================================
    // TIME OF CALLING
    // =====================================

    timeOfCalling: {
      type: String,
      required: true,
    },

    // =====================================
    // CROSS CHECKED BY
    // =====================================

    crossCheckedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmployeeMaster",
    },

    // =====================================
    // STATUS
    // =====================================

    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StatusMaster",
      required: true,
    },

    // =====================================
    // CUSTOMER RESPONSE
    // =====================================

    customerResponse: {
      type: String,
      trim: true,
    },

    // =====================================
    // REMARKS
    // =====================================

    remarks: {
      type: String,
      trim: true,
    },

    // =====================================
    // ACTIVE STATUS
    // =====================================

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// =====================================
// AUTO GENERATE S.NO
// =====================================

customerCallingSchema.pre(
  "save",
  async function (next) {
    try {
      if (!this.sNo) {
        const lastRecord =
          await mongoose
            .model("CustomerCalling")
            .findOne()
            .sort({ sNo: -1 });

        this.sNo = lastRecord
          ? lastRecord.sNo + 1
          : 1;
      }

      next();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = mongoose.model(
  "CustomerCalling",
  customerCallingSchema
);