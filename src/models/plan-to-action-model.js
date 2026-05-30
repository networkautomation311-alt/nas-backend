// =====================================
// models/plan-to-action-model.js
// =====================================

const CallsAssigning = require("./calls-assigning-model");

// =====================================
// FETCH PLAN TO ACTION DATA
// =====================================

const fetchPlanToActionData = async () => {
  const records = await CallsAssigning.find({})
    .populate([
      {
        path: "callNo",
        select: "callNo attemptNo",
      },
      // assignedBy populate removed because assignedBy is a string
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

  return records.map((rec, idx) => ({
    sNo: idx + 1,

    callNo:
      rec.callNo?.callNo || "",

    attemptNo:
      rec.callNo?.attemptNo || "",

    callAssignedBy:
      rec.assignedBy || "",

    customerName:
      rec.customer?.customerName ||
      rec.customer?.name ||
      "",

    natureOfCall:
      rec.natureOfCall?.natureOfCall ||
      rec.natureOfCall?.natureName ||
      rec.natureOfCall?.name ||
      "",

    instrument:
      rec.instrument?.instrumentName ||
      rec.instrument?.name ||
      "",

    problem:
      rec.problem?.problemName ||
      rec.problem?.name ||
      "",

    endUserDepartment:
      rec.endUser?.department?.departmentName ||
      rec.endUser?.department?.name ||
      rec.department?.departmentName ||
      rec.department?.name ||
      "",

    preferredTiming: [
      rec.preferredDate
        ? new Date(
            rec.preferredDate
          ).toLocaleDateString()
        : "",
      rec.preferredTime || "",
    ]
      .filter(Boolean)
      .join(" "),

    approxCloseTime:
      rec.approxCloseTime || "",

    endUserName:
      rec.endUser?.endUserName || "",
  }));
};

module.exports = {
  fetchPlanToActionData,
};