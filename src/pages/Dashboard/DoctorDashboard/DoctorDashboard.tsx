import { useAuthStore } from "@/store/useAuthStore";

const DoctorDashboard = () => {
  const { user, isLoading } = useAuthStore((state) => state);
  if (isLoading) return <>Loading</>;

  return (
    <div>
      DoctorDashboard
      {JSON.stringify(user)}
    </div>
  );
};

export default DoctorDashboard;
