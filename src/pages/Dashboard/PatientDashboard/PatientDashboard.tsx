import { useAuthStore } from "@/store/useAuthStore";

const PatientDashboard = () => {
  const { user } = useAuthStore((state) => state);
  return (
    <div>
      PatientDashboard
      {JSON.stringify(user)}
    </div>
  );
};

export default PatientDashboard;
