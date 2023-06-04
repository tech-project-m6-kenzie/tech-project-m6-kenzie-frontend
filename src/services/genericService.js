import api from "./api";

const getHeaders = () => {
    const token = localStorage.getItem("@context-k-lendar:token");
    let headers = {};
    if (token) {
        headers.Authorization = "Bearer " + token;
    }
    return headers;
};

const genericService = (resource) => {
  return {
    getAll: async () => {
      try {
        const response = await api.get(`/${resource}`, { headers: getHeaders() });
        return response;
      } catch (error) {
        throw error;
      }
    },
    get: async (itemId) => {
      try {
        const response = await api.get(`/${resource}/${itemId}`, { headers: getHeaders() });
        return response;
      } catch (error) {
        throw error;
      }
    },
    create: async (item) => {
      try {
        const response = await api.post(`/${resource}`, item, { headers: getHeaders() });
        return response;
      } catch (error) {
        throw error;
      }
    },
    post: async (item) => {
      try {
        const response = await api.post(`/${resource}`, item, { headers: getHeaders() });
        return response;
      } catch (error) {
        throw error;
      }
    },
    patch: async (itemId, item) => {
      try {
        const response = await api.patch(`/${resource}/${itemId}`, item, { headers: getHeaders() });
        return response;
      } catch (error) {
        throw error;
      }
    },
    delete: async (itemId) => {
      try {
        const response = await api.delete(`/${resource}/${itemId}`, { headers: getHeaders() });
        return response;
      } catch (error) {
        throw error;
      }
    },
  };
};

export default genericService;
