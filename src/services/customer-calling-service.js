// =====================================
// services/customer-calling-service.js
// =====================================

const repository = require(
    "../repositories/customer-calling-repository"
  );
  
  // =====================================
  // CREATE
  // =====================================
  
  const createCustomerCalling = async (
    data
  ) => {
    return await repository.createCustomerCalling(
      data
    );
  };
  
  // =====================================
  // GET ALL
  // =====================================
  
  const getCustomerCallings = async () => {
    return await repository.getCustomerCallings();
  };
  
  // =====================================
  // GET SINGLE
  // =====================================
  
  const getCustomerCalling = async (id) => {
    return await repository.getCustomerCalling(
      id
    );
  };
  
  // =====================================
  // UPDATE
  // =====================================
  
  const updateCustomerCalling = async (
    id,
    data
  ) => {
    return await repository.updateCustomerCalling(
      id,
      data
    );
  };
  
  // =====================================
  // DELETE
  // =====================================
  
  const deleteCustomerCalling = async (
    id
  ) => {
    return await repository.deleteCustomerCalling(
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