import type { CreatePrescriptionDataType } from "@/pages/Dashboard/DoctorDashboard/components/DoctorPrescriptionForm";
import { axiosInstance } from "../apiConfig";

export const prescriptionCreateApi = async (
  data: CreatePrescriptionDataType
) => {
  try {
    const res = await axiosInstance.post("prescription/create", data);
    return res.data;
  } catch (error) {
    console.log("error at creating prescription ", error);
  }
};

export const getPrescriptionForDoctorApi = async () => {
  try {
    const res = await axiosInstance.get("prescription/doctor");
    return res.data;
  } catch (error) {
    console.log("error at creating prescription ", error);
  }
};
export const getPrescriptionForPatientApi = async () => {
  try {
    const res = await axiosInstance.get("prescription/patient");
    return res.data;
  } catch (error) {
    console.log("error at creating prescription ", error);
  }
};
