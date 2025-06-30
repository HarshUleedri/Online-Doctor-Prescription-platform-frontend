import {
  createConsultation,
  getUserConsultation,
} from "@/api/consultationApi/consultationApi";
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
