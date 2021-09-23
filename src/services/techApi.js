import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;