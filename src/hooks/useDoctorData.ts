
import { getDoctorData } from "@/api/doctorAuthApi/doctorAuthApi";
import { useQuery } from "@tanstack/react-query";

const useDoctorData = () => {
  const {
    data: userDoctorData,
    isLoading: doctorIsLoading,
    error: doctorError,
  } = useQuery({
    queryKey: ["userdata"],
    queryFn: () => getDoctorData(),
    retry: false,
  });

  return {
    userDoctorData,
    doctorIsLoading,
    doctorError,
  };
};

export default useDoctorData;
