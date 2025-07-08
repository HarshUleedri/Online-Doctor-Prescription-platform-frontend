import {
  createConsultation,
  getDoctorConsultation,
  getSingleConsultation,
  getUserConsultation,
} from "@/api/consultationApi/consultationApi";
import { pdfGeneratingApi } from "@/api/pdfGeneratingApi/pdfGeneratingApi";
import type { ConsultationDataType } from "@/types/type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateConsultation = () => {
  return useMutation({
    mutationFn: (data: ConsultationDataType) => createConsultation(data),
  });
};

export const useUserConsultation = () => {
  return useQuery({
    queryKey: ["user consultation"],
    queryFn: getUserConsultation,
  });
};

export const useDoctorConsultation = () => {
  return useQuery({
    queryKey: ["doctor consultation"],
    queryFn: getDoctorConsultation,
  });
};
export const useSingleConsultation = (id: string) => {
  return useQuery({
    queryKey: ["single consultation"],
    queryFn: () => getSingleConsultation(id),
  });
};

export const useGeneratePdf = () => {
  return useMutation({
    mutationFn: (data: pdfGeneratingApi) => pdfGeneratingApi(data),
  });
};
