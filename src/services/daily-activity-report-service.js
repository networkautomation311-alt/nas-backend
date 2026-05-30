// =====================================
// services/daily-activity-report-service.js
// =====================================

const repository = require(
    "../repositories/daily-activity-report-repository"
  );
  
  // =====================================
  // CREATE
  // =====================================
  
  const createDailyActivityReport =
    async (data) => {
      return await repository.createDailyActivityReport(
        data
      );
    };
  
  // =====================================
  // GET ALL
  // =====================================
  
  const getAllDailyActivityReport =
    async () => {
      return await repository.getAllDailyActivityReport();
    };
  
  // =====================================
  // GET BY ID
  // =====================================
  
  const getDailyActivityReportById =
    async (id) => {
      return await repository.getDailyActivityReportById(
        id
      );
    };
  
  // =====================================
  // UPDATE
  // =====================================
  
  const updateDailyActivityReport =
    async (id, data) => {
      return await repository.updateDailyActivityReport(
        id,
        data
      );
    };
  
  // =====================================
  // DELETE
  // =====================================
  
  const deleteDailyActivityReport =
    async (id) => {
      return await repository.deleteDailyActivityReport(
        id
      );
    };
  
  module.exports = {
    createDailyActivityReport,
    getAllDailyActivityReport,
    getDailyActivityReportById,
    updateDailyActivityReport,
    deleteDailyActivityReport,
  };