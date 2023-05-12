import axios from "axios";

const server_back = process.env.SERVER_BACK
const token = process.env.BEARER_TOKEN

const http = axios.create({
    baseURL: `${server_back}`,
  });
  http.interceptors.request.use(
    (config) => {
      if (token) {
        // Configure this as per your backend requirements
        config.headers!["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
export default http;