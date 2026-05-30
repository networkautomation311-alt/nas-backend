// =====================================
// models/daily-activity-report-model.js
// =====================================

const mongoose = require("mongoose");

const dailyActivityReportSchema = new mongoose.Schema(
  {
    // =====================================
    // SR NO
    // =====================================

    srNo: {
      type: Number,
      unique: true,
      sparse: true,
    },

    // =====================================
    // CALL ASSIGNING REF
    // =====================================

    callAssigning: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CallsAssigning",
      required: true,
    },

    // =====================================
    // DATE
    // =====================================

    date: {
      type: Date,
      default: Date.now,
    },

    // =====================================
    // CALL NO
    // =====================================

    callNo: {
      type: String,
      default: "",
    },

    // =====================================
    // ATTEMPT NO
    // =====================================

    attemptNo: {
      type: Number,
      default: 1,
    },

    // =====================================
    // CALL ASSIGNED BY
    // =====================================

    callAssignedBy: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // CUSTOMER NAME
    // =====================================

    customerName: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // NATURE OF CALL
    // =====================================

    natureOfCall: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // INSTRUMENT
    // =====================================

    instrument: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // PROBLEM
    // =====================================

    problem: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // END USER DEPARTMENT
    // =====================================

    endUserDepartment: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // PREFERRED TIMING
    // =====================================

    preferredTiming: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // APPROX CLOSE TIME
    // =====================================

    approxCloseTime: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // END USER NAME
    // =====================================

    endUserName: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // CALL STARTING TIME
    // =====================================

    callStartingTime: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // CALL ENDING TIME
    // =====================================

    callEndingTime: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // ACTION TAKEN
    // =====================================

    actionTaken: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // STATUS
    // =====================================

    status: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // NEXT VISIT DATE
    // =====================================

    nextVisitDate: {
      type: Date,
    },

    // =====================================
    // REASON
    // =====================================

    reason: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // REMARKS
    // =====================================

    remarks: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // DISTANCE TRAVELED
    // =====================================

    distanceTraveled: {
      type: Number,
      default: 0,
    },

    // =====================================
    // CALL SHEET NO
    // =====================================

    callSheetNo: {
      type: String,
      trim: true,
      default: "",
    },

    // =====================================
    // CONVEYANCE TOTAL AMOUNT
    // =====================================

    conveyanceTotalAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// =====================================
// AUTO FETCH DATA FROM CALL ASSIGNING (like plan-to-action-model.js)
// =====================================

dailyActivityReportSchema.pre("save", async function (next) {
  try {
    // =====================================
    // AUTO SR NO
    // =====================================

    if (!this.srNo) {
      const Counter = mongoose.connection.collection("dailyactivityreportcounters");

      const counter = await Counter.findOneAndUpdate(
        { _id: "dailyActivityReport" },
        { $inc: { seq: 1 } },
        { upsert: true, returnDocument: "after" }
      );

      let srNo = 1;

      if (counter && counter.value && typeof counter.value.seq === "number") {
        srNo = counter.value.seq;
      }

      this.srNo = srNo;
    }

    // =====================================
    // FETCH CALL ASSIGNING DATA in a populated/plan-to-action style way
    // =====================================

    if (this.callAssigning) {
      // Full popluation for all useful fields like plan-to-action-model.js
      const CallsAssigning = mongoose.model("CallsAssigning");

      const callData = await CallsAssigning.findById(this.callAssigning)
        .populate([
          {
            path: "callNo",
            select: "callNo attemptNo",
          },
          {
            path: "customer",
            select: "customerName name",
          },
          {
            path: "natureOfCall",
            select: "natureOfCall natureName name",
          },
          {
            path: "instrument",
            select: "instrumentName name",
          },
          {
            path: "problem",
            select: "problemName name",
          },
          {
            path: "endUser",
            select: "endUserName department",
            populate: {
              path: "department",
              select: "departmentName name",
            },
          },
          {
            path: "department",
            select: "departmentName name",
          },
        ])
        .lean();

      if (callData) {
        // CALL NO / ATTEMPT NO
        this.callNo = callData.callNo?.callNo || "";
        this.attemptNo = callData.callNo?.attemptNo || "";
        // ASSIGNED BY
        this.callAssignedBy = callData.assignedBy || "";
        // CUSTOMER
        this.customerName = callData.customer?.customerName || callData.customer?.name || "";
        // NATURE OF CALL
        this.natureOfCall =
          callData.natureOfCall?.natureOfCall ||
          callData.natureOfCall?.natureName ||
          callData.natureOfCall?.name ||
          "";
        // INSTRUMENT
        this.instrument = callData.instrument?.instrumentName || callData.instrument?.name || "";
        // PROBLEM
        this.problem = callData.problem?.problemName || callData.problem?.name || "";
        // END USER DEPARTMENT
        this.endUserDepartment =
          callData.endUser?.department?.departmentName ||
          callData.endUser?.department?.name ||
          callData.department?.departmentName ||
          callData.department?.name ||
          "";
        // PREFERRED TIMING
        this.preferredTiming = [
          callData.preferredDate
            ? new Date(callData.preferredDate).toLocaleDateString()
            : "",
          callData.preferredTime || "",
        ]
          .filter(Boolean)
          .join(" ");
        // APPROX CLOSE TIME
        this.approxCloseTime = callData.approxCloseTime || "";
        // END USER NAME
        this.endUserName = callData.endUser?.endUserName || "";
        // CALL SHEET NO
        this.callSheetNo = callData.callSheetNo || "";
      }
    }

    next();
  } catch (error) {
    next(error);
  }
});

const DailyActivityReport =
  mongoose.models.DailyActivityReport ||
  mongoose.model("DailyActivityReport", dailyActivityReportSchema);

module.exports = DailyActivityReport;