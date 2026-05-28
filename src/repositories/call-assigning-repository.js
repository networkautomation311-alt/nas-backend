const CallAssigning = require("../models/call-assigning-model");

// =====================================
// CREATE
// =====================================

const createCallAssigning = async (data) => {
  return await CallAssigning.create(data);
};

// =====================================
// GET ALL
// =====================================

const getAllCallAssigning = async () => {
  return await CallAssigning.find()
    .populate("callEntry")
    .populate("customer")
    .populate("department")
    .populate("endUser")
    .populate("callType")
    .populate("natureOfCall")
    .populate("instrument")
    .populate("problemDetails")
    .sort({ createdAt: -1 });
};

// =====================================
// GET BY ID
// =====================================

const getCallAssigningById = async (id) => {
  return await CallAssigning.findById(id)
    .populate("callEntry")
    .populate("customer")
    .populate("department")
    .populate("endUser")
    .populate("callType")
    .populate("natureOfCall")
    .populate("instrument")
    .populate("problemDetails");
};

// =====================================
// UPDATE
// =====================================

const updateCallAssigning = async (
  id,
  data
) => {
  return await CallAssigning.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );
};

// =====================================
// DELETE
// =====================================

const deleteCallAssigning = async (id) => {
  return await CallAssigning.findByIdAndDelete(
    id
  );
};

module.exports = {
  createCallAssigning,
  getAllCallAssigning,
  getCallAssigningById,
  updateCallAssigning,
  deleteCallAssigning,
};