import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string,
});

export default AxiosInstance;
