const service = require(
    "../services/plan-to-action-service"
  );
  
  // =====================================
  // GET PLAN TO ACTION
  // =====================================
  
  const getPlanToActionData =
    async (req, res) => {
      try {
        const data =
          await service.getPlanToActionData();
  
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
  
  module.exports = {
    getPlanToActionData,
  };