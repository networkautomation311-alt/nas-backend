// =====================================
// controllers/customer-calling-controller.js
// =====================================

const service = require(
    "../services/customer-calling-service"
  );
  
  // =====================================
  // CREATE
  // =====================================
  
  const createCustomerCalling = async (
    req,
    res
  ) => {
    try {
      const data =
        await service.createCustomerCalling(
          req.body
        );
  
      res.status(201).json({
        success: true,
        message:
          "Customer Calling Created Successfully",
        data,
      });
    } catch (error) {
      console.log(error);
  
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  // =====================================
  // GET ALL
  // =====================================
  
  const getCustomerCallings = async (
    req,
    res
  ) => {
    try {
      const data =
        await service.getCustomerCallings();
  
      res.status(200).json({
        success: true,
        message:
          "Customer Calling Fetched Successfully",
        data,
      });
    } catch (error) {
      console.log(error);
  
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  // =====================================
  // GET SINGLE
  // =====================================
  
  const getCustomerCalling = async (
    req,
    res
  ) => {
    try {
      const data =
        await service.getCustomerCalling(
          req.params.id
        );
  
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
  
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  // =====================================
  // UPDATE
  // =====================================
  
  const updateCustomerCalling = async (
    req,
    res
  ) => {
    try {
      const data =
        await service.updateCustomerCalling(
          req.params.id,
          req.body
        );
  
      res.status(200).json({
        success: true,
        message:
          "Customer Calling Updated Successfully",
        data,
      });
    } catch (error) {
      console.log(error);
  
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  // =====================================
  // DELETE
  // =====================================
  
  const deleteCustomerCalling = async (
    req,
    res
  ) => {
    try {
      await service.deleteCustomerCalling(
        req.params.id
      );
  
      res.status(200).json({
        success: true,
        message:
          "Customer Calling Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
  
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  module.exports = {
    createCustomerCalling,
    getCustomerCallings,
    getCustomerCalling,
    updateCustomerCalling,
    deleteCustomerCalling,
  };