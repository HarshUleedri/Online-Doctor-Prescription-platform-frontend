import type { DoctorSignUpDataType } from "@/types/UserTypes";
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
export const doctorSignUpApi = async (data: DoctorSignUpDataType) => {
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
    // return null; // Return null instead of throwing an error
  }
};

export const uploadDoctorImageApi = async (data: FormData) => {
  try {
    const res = await axiosInstance.post("/upload/doctor-image", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllDoctor = async () => {
  try {
    const res = await axiosInstance.get("/doctor");
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    throw error;
    // return null; // Return null instead of throwing an error
  }
};

export const getSingleDoctor = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/doctor/single/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error at get single doctor api ", error);
    // return null; // Return null instead of throwing an error
  }
};
