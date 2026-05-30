// =====================================
// repositories/calls-assigning-repository.js
// =====================================

const CallsAssigning = require(
  "../models/calls-assigning-model"
);

// =====================================
// CREATE
// =====================================

const createCallsAssigning = async (data) => {
  // attemptNo is automatically set in pre-save middleware
  return CallsAssigning.create(data)
    .then(async (doc) => {
      // Return populated document including attemptNo
      return CallsAssigning.findById(doc._id)
        .populate("callNo", "callNo")
        .populate("department", "departmentName")
        .populate("callType", "callType")
        .populate("natureOfCall", "callNatureName natureOfCall callNature")
        .populate("instrument", "instrumentName")
        .populate("problem", "problemName")
        .populate("employee", "employeeName")
        .populate("designation", "designationName")
        .populate("customer", "name")
        .populate("endUser", "endUserName name")
        .populate("priority", "urgencyType urgencyLevel name")
        .populate("assignedBy", "technicianName name");
    });
};

// =====================================
// GET ALL
// =====================================

const getCallsAssigning = async () => {
  // attemptNo will be included now since it's in the schema and the records are new.
  return CallsAssigning.find()
    .populate("callNo", "callNo")
    .populate("department", "departmentName")
    .populate("callType", "callType")
    .populate("natureOfCall", "callNatureName natureOfCall callNature")
    .populate("instrument", "instrumentName")
    .populate("problem", "problemName")
    .populate("employee", "employeeName")
    .populate("designation", "designationName")
    .populate("customer", "name")
    .populate("endUser", "endUserName name")
    .populate("priority", "urgencyType urgencyLevel name")
    .populate("assignedBy", "technicianName name")
    .sort({ createdAt: -1 });
};

// =====================================
// GET SINGLE
// =====================================

const getCallAssigning = async (id) => {
  return CallsAssigning.findById(id)
    .populate("callNo", "callNo")
    .populate("department", "departmentName")
    .populate("callType", "callType")
    .populate("natureOfCall", "callNatureName natureOfCall callNature")
    .populate("instrument", "instrumentName")
    .populate("problem", "problemName")
    .populate("employee", "employeeName")
    .populate("designation", "designationName")
    .populate("customer", "name")
    .populate("endUser", "endUserName name")
    .populate("priority", "urgencyType urgencyLevel name")
    .populate("assignedBy", "technicianName name");
};

// =====================================
// UPDATE
// =====================================

const updateCallsAssigning = async (id, data) => {
  return CallsAssigning.findByIdAndUpdate(id, data, { new: true })
    .populate("callNo", "callNo")
    .populate("department", "departmentName")
    .populate("callType", "callType")
    .populate("natureOfCall", "callNatureName natureOfCall callNature")
    .populate("instrument", "instrumentName")
    .populate("problem", "problemName")
    .populate("employee", "employeeName")
    .populate("designation", "designationName")
    .populate("customer", "name")
    .populate("endUser", "endUserName name")
    .populate("priority", "urgencyType urgencyLevel name")
    .populate("assignedBy", "technicianName name");
};

// =====================================
// DELETE
// =====================================

const deleteCallsAssigning = async (id) => {
  return CallsAssigning.findByIdAndDelete(id);
};

module.exports = {
  createCallsAssigning,
  getCallsAssigning,
  getCallAssigning,
  updateCallsAssigning,
  deleteCallsAssigning,
};