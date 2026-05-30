// =====================================
// models/calls-assigning-model.js
// =====================================

const mongoose = require("mongoose");

const callsAssigningSchema =
  new mongoose.Schema(
    {
      // =====================================
      // REFERENCES
      // =====================================

      department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
      },

      callType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CallMaster",
      },

      natureOfCall: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CallNatureMaster",
      },

      instrument: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InstrumentMaster",
      },

      problem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Problem",
      },

      employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeMaster",
        required: true,
      },

      // Added Designation Master reference
      designation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DesignationMaster",
      },

      // Added Customer Master reference
      customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CustomerMaster",
      },

      // Added End User Master reference
      endUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EndUserMaster",
      },

      status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StatusMaster",
      },

      priority: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CallUrgency",
      },

      callNo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CallEntry",
        required: true,
      },

      // =====================================
      // ATTEMPT NO
      // =====================================
      // attemptNo auto-generate karega, same (callNo, isActive) combination ke records count karke + 1 karega.
      attemptNo: {
        type: Number,
      },

      // =====================================
      // DATE & TIME
      // =====================================

      preferredDate: {
        type: Date,
      },

      preferredTime: {
        type: String,
      },

      assignDate: {
        type: Date,
        default: Date.now,
      },

      assignTime: {
        type: String,
      },

      targetDate: {
        type: Date,
      },

      targetTime: {
        type: String,
      },

      // =====================================
      // CALL DETAILS
      // =====================================

      approxCloseTime: {
        type: String,
        required: true,
      },

      // Assigned By must reference TechnicianMaster (NOT string)
      assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TechnicianMaster",
        required: false,
      },

      remarks: {
        type: String,
        trim: true,
      },

      // =====================================
      // CLOUDINARY FILES
      // =====================================

      attachment: {
        public_id: {
          type: String,
        },

        url: {
          type: String,
        },
      },

      audio: {
        public_id: {
          type: String,
        },

        url: {
          type: String,
        },
      },

      // =====================================
      // STATUS
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

// attemptNo auto-generate karega: same callNo aur isActive:true ke records count karke +1 set karega
callsAssigningSchema.pre("save", async function (next) {
  if (this.isNew) {
    // Agar attemptNo pehle se diya gaya hai to skip karein (edge case)
    if (typeof this.attemptNo === "number" && this.attemptNo > 0) return next();

    try {
      const CallsAssigning = mongoose.model("CallsAssigning");
      const count = await CallsAssigning.countDocuments({
        callNo: this.callNo,
        isActive: true,
      });
      this.attemptNo = count + 1;
      return next();
    } catch (err) {
      return next(err);
    }
  } else {
    return next();
  }
});

module.exports = mongoose.model(
  "CallsAssigning",
  callsAssigningSchema
);