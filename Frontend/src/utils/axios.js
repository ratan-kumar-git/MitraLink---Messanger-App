import axios from 'axios';

const BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://mitralink-messanger-app.onrender.com/api"
    : "http://localhost:8000/api";
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})