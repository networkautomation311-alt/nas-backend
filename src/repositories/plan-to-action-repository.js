const {
    fetchPlanToActionData,
  } = require("../models/plan-to-action-model");
  
  // =====================================
  // GET PLAN TO ACTION DATA
  // =====================================
  
  const getPlanToActionData =
    async () => {
      return await fetchPlanToActionData();
    };
  
  module.exports = {
    getPlanToActionData,
  };