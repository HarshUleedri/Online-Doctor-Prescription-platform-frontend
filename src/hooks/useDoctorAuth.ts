import {
  doctorLoginApi,
  doctorLogoutApi,
  doctorSignUpApi,
  getDoctorData,
  uploadDoctorImageApi,
} from "@/api/doctorAuthApi/doctorAuthApi";
import { useAuthStore } from "@/store/useAuthStore";
import type { DoctorSignUpDataType } from "@/types/UserTypes";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const useDoctorAuth = () => {
  const { login, logout, setIsError, setIsLoading } = useAuthStore(
    (state) => state
  );
  const navigate = useNavigate();

  //sign In
  const {
    mutate: DoctorSignupMutate,
    isPending: DoctorSignupIsPending,
    error: DoctorSignupError,
  } = useMutation({
    mutationFn: (data: DoctorSignUpDataType) => doctorSignUpApi(data),

    onSuccess: async () => {
      try {
        setIsLoading(true);
        const res = await getDoctorData();
        login(res.doctor);
        navigate("/dashboard", { replace: true });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        if (
          typeof error === "object" &&
          error !== null &&
          "response" in error &&
          typeof (error as any).response === "object" &&
          (error as any).response !== null &&
          "data" in (error as any).response &&
          typeof (error as any).response.data === "object" &&
          (error as any).response.data !== null &&
          "message" in (error as any).response.data
        ) {
          setIsError((error as any).response.data.message as string);
        } else {
          setIsError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  //login
  const {
    mutate: DoctorLoginMutate,
    isPending: DoctorLoginIsPending,
    error: DoctorLoginError,
  } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      doctorLoginApi(data),
    onSuccess: async () => {
      try {
        setIsLoading(true);
        const res = await getDoctorData();
        login(res.doctor);
        navigate("/dashboard", { replace: true });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        if (
          typeof error === "object" &&
          error !== null &&
          "response" in error &&
          typeof (error as any).response === "object" &&
          (error as any).response !== null &&
          "data" in (error as any).response &&
          typeof (error as any).response.data === "object" &&
          (error as any).response.data !== null &&
          "message" in (error as any).response.data
        ) {
          setIsError((error as any).response.data.message as string);
        } else {
          setIsError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  //logout
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

  // upload image
  const {
    isPending: uploadIsPending,
    mutateAsync: uploadMutate,
    isError: uploadIsError,
    data: uploadedImage,
  } = useMutation({
    mutationFn: (data: FormData) => uploadDoctorImageApi(data),
  });

  return {
    uploadedImage,
    uploadMutate,
    uploadIsPending,
    uploadIsError,
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
