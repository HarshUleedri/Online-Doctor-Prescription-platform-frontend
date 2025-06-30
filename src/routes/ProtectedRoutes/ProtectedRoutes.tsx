import ProtectedLayout from "@/Layout/ProtectedLayout";
import Consultation from "@/pages/Consultation/Consultation";

export const ProtectedRoutes = [
  {
    path: "/dashboard",
    element: <ProtectedLayout />,
  },
  {
    path: "/consult/:id",
    element: <Consultation />,
  },
];
