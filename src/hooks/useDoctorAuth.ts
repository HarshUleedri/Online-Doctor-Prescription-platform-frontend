import {
  doctorLoginApi,
  doctorLogoutApi,
  doctorSignUpApi,
  getDoctorData,
} from "@/api/doctorAuthApi/doctorAuthApi";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const useDoctorAuth = () => {
  const { login, logout, setIsError, setIsLoading } = useAuthStore(
    (state) => state
  );
  const navigate = useNavigate();
  const {
    mutate: DoctorSignupMutate,
    isPending: DoctorSignupIsPending,
    error: DoctorSignupError,
  } = useMutation({
    mutationFn: (data: {
      name: string;
      profilePic: string;
      specialty: string;
      email: string;
      phone: string;
      password: string;
      experience: number;
    }) => doctorSignUpApi(data),

    onSuccess: () => {},
  });

  //login
  const {
    mutate: DoctorLoginMutate,
    isPending: DoctorLoginIsPending,
    error: DoctorLoginError,
  } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      doctorLoginApi(data),
    onSuccess: async (response) => {
      try {
        console.log(response);
        setIsLoading(true);
        const res = await getDoctorData();
        // const data = await res.data;
        console.log(res);
        // login(data.doctor);
        navigate("/");
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setIsError(error.response.data.message as string);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const {
    mutate: DoctorLogoutMutate,
    isPending: DoctorLogoutIsPending,
    error: DoctorLogoutErrors,
  } = useMutation({
    mutationFn: () => doctorLogoutApi(),
    onSuccess: () => {
      logout(); // Clear user data from the store
    },
  });

  return {
    DoctorSignupMutate,
    DoctorSignupIsPending,
    DoctorSignupError,
    DoctorLoginMutate,
    DoctorLoginIsPending,
    DoctorLoginError,
    DoctorLogoutMutate,
    DoctorLogoutIsPending,
    DoctorLogoutErrors,
  };
};

export default useDoctorAuth;
