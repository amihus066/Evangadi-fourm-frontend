import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://evangdi-fourm-backend.onrender.com/api",
  // baseURL: "http://localhost:3456/api",
});

export default axiosInstance;
