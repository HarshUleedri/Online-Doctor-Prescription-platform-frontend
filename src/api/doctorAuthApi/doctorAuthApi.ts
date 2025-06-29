import { axiosInstance } from "../apiConfig";

export const doctorLoginApi = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axiosInstance.post("/doctor/login", data);
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    throw error;
  }
};
export const doctorSignUpApi = async (data: {
  name: string;
  profilePic: string;
  specialty: string;
  email: string;
  phone: string;
  password: string;
  experience: number;
}) => {
  try {
    const res = await axiosInstance.post("/doctor/signup", data);
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    throw error;
  }
};

export const doctorLogoutApi = async () => {
  try {
    const res = await axiosInstance.post("/doctor/logout");
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    throw error;
  }
};

export const getDoctorData = async () => {
  try {
    const res = await axiosInstance.get("/doctor/me");
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    throw error;
    return null; // Return null instead of throwing an error
  }
};
