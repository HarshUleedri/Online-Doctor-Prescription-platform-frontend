import { axiosInstance } from "@/api/apiConfig";
import { loginApi, logoutApi } from "@/api/authApi/authApi";
import { doctorSignUpApi } from "@/api/doctorAuthApi/doctorAuthApi";
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";

const fetchDoctor = async () => {
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

    onSuccess: () => {
      const doctorData = fetchDoctor();
      if (doctorData) {
        login(doctorData);
      } else {
        console.error("Failed to fetch user data after login.");
        logout(); // Ensure logout if user data is not fetched
      }
    },
  });

  const {
    mutate: DoctorLoginMutate,
    isPending: DoctorLoginIsPending,
    error: DoctorLoginError,
  } = useMutation({
    mutationFn: (data: { email: string; password: string }) => loginApi(data),
    onSuccess: () => {
      const doctorData = fetchDoctor();
      if (doctorData) {
        login(doctorData);
      } else {
        console.error("Failed to fetch user data after login.");
        logout(); // Ensure logout if user data is not fetched
      }
    },
  });

  const {
    mutate: DoctorLogoutMutate,
    isPending: DoctorLogoutIsPending,
    error: DoctorLogoutErrors,
  } = useMutation({
    mutationFn: () => logoutApi(),
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

export default usePatientAuth;
