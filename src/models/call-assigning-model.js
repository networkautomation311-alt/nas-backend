const mongoose = require("mongoose");

// =====================================
// CALL ASSIGNING SCHEMA
// =====================================

const callAssigningSchema = new mongoose.Schema(
  {
    // AUTO SR NO
    srNo: {
      type: Number,
      unique: true,
      sparse: true,
    },

    // OLD CALL ENTRY REFERENCE
    callEntry: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CallEntry",
      required: true,
    },

    // OLD DATA AUTO FETCH
    callDate: {
      type: Date,
    },

    callTime: {
      type: String,
      trim: true,
    },

    // AUTO GENERATED CALL NUMBER
    callNo: {
      type: String,
      trim: true,
    },

    // CUSTOMER DETAILS
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomerMaster",
    },

    customerName: {
      type: String,
      trim: true,
      default: "",
    },

    endUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EndUserMaster",
    },

    endUserName: {
      type: String,
      trim: true,
      default: "",
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },

    departmentName: {
      type: String,
      trim: true,
      default: "",
    },

    // CONTACT PERSON
    contactPerson: {
      type: String,
      trim: true,
      default: "",
    },

    // CALL TYPE
    callType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CallMaster",
    },

    // AMC / WARRANTY
    warrantyInformation: {
      type: String,
      trim: true,
      default: "",
    },

    // CHARGEABLE
    chargeAmount: {
      type: Number,
      default: 0,
    },

    // NATURE OF CALL
    natureOfCall: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CallNatureMaster",
    },

    // INSTRUMENT
    instrument: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InstrumentMaster",
    },

    // PROBLEM DETAILS
    problemDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
    },

    // PREFERRED DATE & TIME
    preferredDate: {
      type: Date,
    },

    preferredTimings: {
      type: String,
      trim: true,
    },

    // CALL ASSIGNMENT DETAILS
    assignTo: {
      type: String,
      trim: true,
      required: true,
    },

    assignBy: {
      type: String,
      trim: true,
      required: true,
    },

    assignDate: {
      type: Date,
      default: Date.now,
    },

    assignTime: {
      type: String,
      trim: true,
    },

    targetDate: {
      type: Date,
    },

    targetTime: {
      type: String,
      trim: true,
    },

    // APPROX CLOSE TIME
    approxCloseTime: {
      type: String,
      trim: true,
      required: true,
    },

    // REMARKS
    remarks: {
      type: String,
      trim: true,
      default: "",
    },

    // COMMENTS
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

// IMPORT CALL ENTRY MODEL
const CallEntry = require("./call-entry-form-model");

// AUTO FETCH OLD DATA
callAssigningSchema.pre("save", async function (next) {
  try {
    // AUTO SR NO
    if (!this.srNo) {
      const Counter = mongoose.connection.collection("callassigncounters");

      const counter = await Counter.findOneAndUpdate(
        { _id: "callAssign" },
        { $inc: { seq: 1 } },
        {
          upsert: true,
          returnDocument: "after",
        }
      );

      let sr;

      // Correct way to handle the counter return value depending on MongoDB version/driver
      if (counter && counter.value && typeof counter.value.seq === "number") {
        sr = counter.value.seq;
      } else if (counter && typeof counter.seq === "number") {
        sr = counter.seq;
      }

      this.srNo = sr;
    }

    // FETCH OLD CALL ENTRY DATA FROM CALLENTRY
    if (this.callEntry) {
      const oldCall = await CallEntry.findById(this.callEntry)
        .populate("customer")
        .populate("department")
        .populate("endUser");

      if (oldCall) {
        this.callDate = oldCall.callDate;
        this.callTime = oldCall.callTime;
        this.callNo = oldCall.callNo;

        // CUSTOMER
        this.customer = oldCall.customer?._id || null;
        this.customerName =
          oldCall.customer?.customerName ||
          oldCall.customer?.name ||
          "";

        // END USER
        this.endUser = oldCall.endUser?._id || null;
        this.endUserName =
          oldCall.endUser?.endUserName ||
          oldCall.endUser?.name ||
          "";

        // DEPARTMENT
        this.department = oldCall.department?._id || null;
        this.departmentName =
          oldCall.department?.departmentName ||
          oldCall.department?.name ||
          "";

        // CONTACT PERSON
        this.contactPerson = oldCall.callLoggedBy || "";

        // CALL DETAILS
        this.callType = oldCall.callType || null;
        this.warrantyInformation = oldCall.warrantyInformation || "";
        this.chargeAmount = typeof oldCall.chargeAmount === "number" ? oldCall.chargeAmount : 0;
        this.natureOfCall = oldCall.natureOfCall || null;
        this.instrument = oldCall.instrument || null;
        this.problemDetails = oldCall.problemDetails || null;
        this.preferredDate = oldCall.preferredDate || null;
        this.preferredTimings = oldCall.preferredTimings || "";
      }
    }

    next();
  } catch (error) {
    next(error);
  }
});

// MODEL EXPORT
const CallAssigning =
  mongoose.models.CallAssigning ||
  mongoose.model("CallAssigning", callAssigningSchema);

module.exports = CallAssigning;