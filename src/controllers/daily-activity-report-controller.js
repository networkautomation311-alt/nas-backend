// =====================================
// controllers/daily-activity-report-controller.js
// =====================================

const service = require(
    "../services/daily-activity-report-service"
  );
  
  // =====================================
  // CREATE
  // =====================================
  
  const createDailyActivityReport =
    async (req, res) => {
      try {
        const data =
          await service.createDailyActivityReport(
            req.body
          );
  
        res.status(201).json({
          success: true,
          message:
            "Daily Activity Report Created Successfully",
          data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };
  
  // =====================================
  // GET ALL
  // =====================================
  
  const getAllDailyActivityReport =
    async (req, res) => {
      try {
        const data =
          await service.getAllDailyActivityReport();
  
        res.status(200).json({
          success: true,
          count: data.length,
          data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };
  
  // =====================================
  // GET BY ID
  // =====================================
  
  const getDailyActivityReportById =
    async (req, res) => {
      try {
        const data =
          await service.getDailyActivityReportById(
            req.params.id
          );
  
        res.status(200).json({
          success: true,
          data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };
  
  // =====================================
  // UPDATE
  // =====================================
  
  const updateDailyActivityReport =
    async (req, res) => {
      try {
        const data =
          await service.updateDailyActivityReport(
            req.params.id,
            req.body
          );
  
        res.status(200).json({
          success: true,
          message:
            "Daily Activity Report Updated Successfully",
          data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };
  
  // =====================================
  // DELETE
  // =====================================
  
  const deleteDailyActivityReport =
    async (req, res) => {
      try {
        await service.deleteDailyActivityReport(
          req.params.id
        );
  
        res.status(200).json({
          success: true,
          message:
            "Daily Activity Report Deleted Successfully",
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    };
  
  module.exports = {
    createDailyActivityReport,
    getAllDailyActivityReport,
    getDailyActivityReportById,
    updateDailyActivityReport,
    deleteDailyActivityReport,
  };