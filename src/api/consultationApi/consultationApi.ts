import type { ConsultationDataType } from "@/types/type";
import { axiosInstance } from "../apiConfig";

export const createConsultation = async (data: ConsultationDataType) => {
  try {
    const res = await axiosInstance.post("/consultations", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getUserConsultation = async () => {
  try {
    const res = await axiosInstance.get(`/consultations/patient`);
    return res.data;
  } catch (error) {
    console.log("Error at login api ", error);
    throw error;
    // return null; // Return null instead of throwing an error
  }
};
