import { axiosInstance } from "../apiConfig";

export const loginApi = async (data: { email: string; password: string }) => {
  try {
    const res = await axiosInstance.post("/patient/login", data);
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    throw error;
  }
};
export const signUpApi = async (data: {
  name: string;
  profilePic: string;
  age: number;
  email: string;
  phone: string;
  password: string;
  historyOfSurgery?: string[];
  historyOfIllness?: string[];
}) => {
  try {
    const res = await axiosInstance.post("/patient/signup", data);
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    throw error;
  }
};

export const logoutApi = async () => {
  try {
    const res = await axiosInstance.post("/patient/logout");
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    throw error;
  }
};

export const getUserData = async () => {
  try {
    const res = await axiosInstance.get("/patient/me");
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    return null;
  }
};
