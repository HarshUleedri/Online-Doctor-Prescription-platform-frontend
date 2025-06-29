import DoctorDashboard from "@/pages/Dashboard/DoctorDashboard/DoctorDashboard";
import PatientDashboard from "@/pages/Dashboard/PatientDashboard/PatientDashboard";
import { useAuthStore } from "@/store/useAuthStore";
import { Navigate } from "react-router";

const ProtectedLayout = () => {
  const { isAuthenticated, user } = useAuthStore((state) => state);

  if (!isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }
  if (isAuthenticated && user.role === "doctor") {
    console.log(user);
    return <DoctorDashboard />;
  }
  if (isAuthenticated && user.role === "patient") {
    console.log(user);
    return <PatientDashboard />;
  }
};

export default ProtectedLayout;
