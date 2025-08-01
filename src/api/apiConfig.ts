import axios from "axios";

const baseURL =
  import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/v1/";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
