import {
  getUserData,
  loginApi,
  logoutApi,
  signUpApi,
  uploadProfileImageApi,
} from "@/api/authApi/authApi";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router";
import type { PatientSignUpDataType } from "@/types/UserTypes";

const usePatientAuth = () => {
  const { login, logout, setIsLoading, setIsError } = useAuthStore(
    (state) => state
  );

  const navigate = useNavigate();

  const {
    mutate: signupMutate,
    isPending: signupIsPending,
    error: signupError,
  } = useMutation({
    mutationFn: (data: PatientSignUpDataType) => signUpApi(data),

    onSuccess: async () => {
      try {
        setIsLoading(true);
        const res = await getUserData();
        login(res.patient);
        navigate("/dashboard", { replace: true });
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
    mutate: loginMutate,
    isPending: loginIsPending,
    error: loginError,
  } = useMutation({
    mutationFn: (data: { email: string; password: string }) => loginApi(data),
    onSuccess: async () => {
      try {
        setIsLoading(true);
        const res = await getUserData();
        login(res.patient);
        navigate("/dashboard", { replace: true });
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
    mutate: logoutMutate,
    isPending: logoutIsPending,
    error: logoutErrors,
  } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      logout(); // Clear user data from the store
    },
  });

  //  upload image
  const {
    isPending: uploadIsPending,
    mutateAsync: uploadMutate,
    isError: uploadIsError,
  } = useMutation({
    mutationFn: (data: FormData) => uploadProfileImageApi(data),
  });

  return {
    uploadMutate,
    uploadIsPending,
    uploadIsError,
    signupMutate,
    signupIsPending,
    signupError,
    loginMutate,
    loginIsPending,
    loginError,
    logoutMutate,
    logoutIsPending,
    logoutErrors,
  };
};

export default usePatientAuth;
