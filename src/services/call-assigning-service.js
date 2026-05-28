const repository = require(
    "../repositories/call-assigning-repository"
  );
  
  // =====================================
  // CREATE
  // =====================================
  
  const createCallAssigning = async (
    data
  ) => {
    return await repository.createCallAssigning(
      data
    );
  };
  
  // =====================================
  // GET ALL
  // =====================================
  
  const getAllCallAssigning = async () => {
    return await repository.getAllCallAssigning();
  };
  
  // =====================================
  // GET BY ID
  // =====================================
  
  const getCallAssigningById = async (
    id
  ) => {
    return await repository.getCallAssigningById(
      id
    );
  };
  
  // =====================================
  // UPDATE
  // =====================================
  
  const updateCallAssigning = async (
    id,
    data
  ) => {
    return await repository.updateCallAssigning(
      id,
      data
    );
  };
  
  // =====================================
  // DELETE
  // =====================================
  
  const deleteCallAssigning = async (
    id
  ) => {
    return await repository.deleteCallAssigning(
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