// =====================================
// repositories/daily-activity-report-repository.js
// =====================================

const DailyActivityReport = require(
    "../models/daily-activity-report-model"
  );
  
  // =====================================
  // CREATE
  // =====================================
  
  const createDailyActivityReport =
    async (data) => {
      return await DailyActivityReport.create(
        data
      );
    };
  
  // =====================================
  // GET ALL
  // =====================================
  
  const getAllDailyActivityReport =
    async () => {
      return await DailyActivityReport.find()
        .populate("callAssigning")
        .sort({ createdAt: -1 });
    };
  
  // =====================================
  // GET BY ID
  // =====================================
  
  const getDailyActivityReportById =
    async (id) => {
      return await DailyActivityReport.findById(
        id
      ).populate("callAssigning");
    };
  
  // =====================================
  // UPDATE
  // =====================================
  
  const updateDailyActivityReport =
    async (id, data) => {
      return await DailyActivityReport.findByIdAndUpdate(
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
  
  const deleteDailyActivityReport =
    async (id) => {
      return await DailyActivityReport.findByIdAndDelete(
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