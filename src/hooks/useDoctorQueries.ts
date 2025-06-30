import {
  getAllDoctor,
  getSingleDoctor,
} from "@/api/doctorAuthApi/doctorAuthApi";
import { useQuery } from "@tanstack/react-query";

export const useAllDoctorData = () => {
  return useQuery({
    queryKey: ["doctorsData"],
    queryFn: getAllDoctor,
  });
};

export const useSingleDoctorData = (id: string) => {
  return useQuery({
    queryKey: ["singleDoctor"],
    queryFn: () => getSingleDoctor(id),
    enabled: !!id,
  });
};
