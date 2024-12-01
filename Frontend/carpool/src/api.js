import axios from "axios";

// Base URL of the backend server
const API_BASE_URL = "http://localhost:3000/api";

// Helper function for error handling
const handleApiError = (error) => {
  if (error.response) {
    // Server responded with a status code other than 2xx
    return { success: false, message: error.response.data.error || error.response.statusText };
  } else if (error.request) {
    // No response received
    return { success: false, message: "No response from server. Please try again later." };
  } else {
    // Other errors (e.g., request setup)
    return { success: false, message: error.message };
  }
};

// API methods
const api = {
  // Auth APIs
  signup: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, data);
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  login: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  forgetPassword: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/forget-password`, data);
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Profile APIs
  getProfile: async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  updateProfile: async (data, token) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/auth/profile/update`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Ride APIs
  createRide: async (data, token) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/rides/create`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  listAvailableRides: async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/rides/list`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  bookRide: async (rideId, token) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/rides/book`,
        { rideId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  cancelBooking: async (bookingId, token) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/rides/cancel-booking`,
        { bookingId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  getActiveBookings: async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/rides/my-active-bookings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  getRideHistory: async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/rides/my-ride-history`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },
};

export default api;
