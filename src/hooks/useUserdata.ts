import { getUserData } from "@/api/authApi/authApi";
import { useQuery } from "@tanstack/react-query";

const useUserdata = () => {
  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
  } = useQuery({
    queryKey: ["userdata"],
    queryFn: () => getUserData(),
    retry: false,
  });

  return {
    userData,
    userIsLoading,
    userError,
  };
};

export default useUserdata;
