import { loginApi, logoutApi, signUpApi } from "@/api/authApi/authApi";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { axiosInstance } from "@/api/apiConfig";

const FetchUser = async () => {
  try {
    const res = await axiosInstance.get("/patient/me");
    const data = res.data;
    return data.patient;
  } catch (error) {
    console.log("Error fetching user data: ", error);
    return null; // Return null instead of throwing an error
  }
};

const usePatientAuth = () => {
  const { login, logout } = useAuthStore((state) => state);

  const {
    mutate: signupMutate,
    isPending: signupIsPending,
    error: signupError,
  } = useMutation({
    mutationFn: (data: {
      name: string;
      profilePic: string;
      age: number;
      email: string;
      phone: string;
      password: string;
      historyOfSurgery?: string[];
      historyOfIllness?: string[];
    }) => signUpApi(data),

    onSuccess: () => {
      const userData = FetchUser();
      if (userData) {
        login(userData);
      } else {
        console.error("Failed to fetch user data after login.");
        logout(); // Ensure logout if user data is not fetched
      }
    },
  });

  const {
    mutate: loginMutate,
    isPending: loginIsPending,
    error: loginError,
  } = useMutation({
    mutationFn: (data: { email: string; password: string }) => loginApi(data),
    onSuccess: () => {
      const userData = FetchUser();
      if (userData) {
        login(userData);
      } else {
        console.error("Failed to fetch user data after login.");
        logout(); // Ensure logout if user data is not fetched
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

  return {
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
