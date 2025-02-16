import axios from "axios";

const API_URL = "http://localhost:5000/api";

const firebaseService = {
  getTitles: async () => {
    try {
      const response = await axios.get(`${API_URL}/titles`);
      return response.data;
    } catch (error) {
      console.error("Error fetching titles:", error.response?.data || error.message);
      throw error;
    }
  },

  addTitle: async (title) => {
    try {
      const response = await axios.post(`${API_URL}/titles`, { title });
      return response.data;
    } catch (error) {
      console.error("Error adding title:", error.response?.data || error.message);
      throw error;
    }
  },

  addTodo: async (titleId, text) => {
    try {
      const response = await axios.post(`${API_URL}/todos`, { titleId, text });
      return response.data;
    } catch (error) {
      console.error("Error adding todo:", error.response?.data || error.message);
      throw error;
    }
  },

  updateTodo: async (titleId, todoId, updatedTodo) => {
    try {
      const response = await axios.put(`${API_URL}/todos/${titleId}/${todoId}`, updatedTodo);
      return response.data;
    } catch (error) {
      console.error("Error updating todo:", error.response?.data || error.message);
      throw error;
    }
  },

  deleteTodo: async (titleId, todoId) => {
    try {
      await axios.delete(`${API_URL}/todos/${titleId}/${todoId}`);
    } catch (error) {
      console.error("Error deleting todo:", error.response?.data || error.message);
      throw error;
    }
  },

  deleteTitle: async (titleId) => {
    try {
      const response = await axios.delete(`${API_URL}/titles/${titleId}`);
      console.log("Title deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting title:", error.response?.data || error.message);
      throw error;
    }
  }
};

export default firebaseService;
