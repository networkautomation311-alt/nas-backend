const repository = require(
    "../repositories/plan-to-action-repository"
  );
  
  // =====================================
  // GET DATA
  // =====================================
  
  const getPlanToActionData =
    async () => {
      return await repository.getPlanToActionData();
    };
  
  module.exports = {
    getPlanToActionData,
  };