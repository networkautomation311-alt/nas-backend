const repository = require("../repositories/feedback-form-repository");

class FeedbackFormService {
  async createFeedback(data) {
    return await repository.create(data);
  }

  async getAllFeedback() {
    return await repository.findAll();
  }

  async getFeedbackById(id) {
    return await repository.findById(id);
  }

  async updateFeedback(id, data) {
    return await repository.update(id, data);
  }

  async deleteFeedback(id) {
    return await repository.delete(id);
  }
}

module.exports = new FeedbackFormService();