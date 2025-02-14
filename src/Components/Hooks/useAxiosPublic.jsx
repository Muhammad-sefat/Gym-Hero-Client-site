import axios from "axios";
// https://gym-hero-server.vercel.app/

export const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
