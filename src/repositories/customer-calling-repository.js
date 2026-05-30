// =====================================
// repositories/customer-calling-repository.js
// =====================================

const CustomerCalling = require(
    "../models/customer-calling-model"
  );
  
  // =====================================
  // CREATE
  // =====================================
  
  const createCustomerCalling = async (data) => {
    return await CustomerCalling.create(data);
  };
  
  // =====================================
  // GET ALL
  // =====================================
  
  const getCustomerCallings = async () => {
    return await CustomerCalling.find()
      .populate("callNo", "callNo")
      .populate("customerName", "name")
      .populate("department", "departmentName")
      .populate("crossCheckedBy", "employeeName")
      .populate("status", "statusName")
      .sort({ createdAt: -1 });
  };
  
  // =====================================
  // GET SINGLE
  // =====================================
  
  const getCustomerCalling = async (id) => {
    return await CustomerCalling.findById(id)
      .populate("callNo", "callNo")
      .populate("customerName", "name")
      .populate("department", "departmentName")
      .populate("crossCheckedBy", "employeeName")
      .populate("status", "statusName");
  };
  
  // =====================================
  // UPDATE
  // =====================================
  
  const updateCustomerCalling = async (
    id,
    data
  ) => {
    return await CustomerCalling.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
  };
  
  // =====================================
  // DELETE
  // =====================================
  
  const deleteCustomerCalling = async (
    id
  ) => {
    return await CustomerCalling.findByIdAndDelete(
      id
    );
  };
  
  module.exports = {
    createCustomerCalling,
    getCustomerCallings,
    getCustomerCalling,
    updateCustomerCalling,
    deleteCustomerCalling,
  };