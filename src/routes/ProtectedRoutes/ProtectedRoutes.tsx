import ProtectedLayout from "@/Layout/ProtectedLayout";
import Consultation from "@/pages/Consultation/Consultation";
import SingleConsultationData from "@/pages/Dashboard/PatientDashboard/components/SingleConsultationData";

export const ProtectedRoutes = [
  {
    path: "/dashboard",
    element: <ProtectedLayout />,
    children: [
      {
        path: "consultation/:id",
        element: <SingleConsultationData />,
      },
    ],
  },
  {
    path: "/consult/:id",
    element: <Consultation />,
  },
];
