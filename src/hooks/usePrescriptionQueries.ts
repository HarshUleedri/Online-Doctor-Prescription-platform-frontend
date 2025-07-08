import {
  getPrescriptionForDoctorApi,
  getPrescriptionForPatientApi,
  prescriptionCreateApi,
} from "@/api/prescriptionApi/prescriptionApi";
import type { CreatePrescriptionDataType } from "@/pages/Dashboard/DoctorDashboard/components/DoctorPrescriptionForm";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreatePrescription = () => {
  return useMutation({
    mutationFn: (data: CreatePrescriptionDataType) =>
      prescriptionCreateApi(data),
  });
};

export const usePrescriptionForDoctor = () => {
  return useQuery({
    queryKey: ["doctor prescription"],
    queryFn: getPrescriptionForDoctorApi,
  });
};

export const usePrescriptionForPatient = () => {
  return useQuery({
    queryKey: ["Patient prescription"],
    queryFn: getPrescriptionForPatientApi,
  });
};
