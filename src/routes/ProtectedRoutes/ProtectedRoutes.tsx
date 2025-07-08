import ProtectedLayout from "@/Layout/ProtectedLayout";
import Consultation from "@/pages/Consultation/Consultation";
import DoctorConsultationListing from "@/pages/Dashboard/DoctorDashboard/components/DoctorConsultationListing";
import DoctorPrescriptionForm from "@/pages/Dashboard/DoctorDashboard/components/DoctorPrescriptionForm";
import PrescriptionListing from "@/pages/Dashboard/DoctorDashboard/components/PrescriptionListing";
import ComingSoon from "@/pages/Dashboard/PatientDashboard/components/ComingSoon";
import { Navigate } from "react-router";

export const ProtectedRoutes = [
  {
    path: "/dashboard",
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/dashboard/patients"} />,
      },
      {
        path: "patients",
        element: <DoctorConsultationListing />,
      },
      {
        path: "prescriptions",
        element: <PrescriptionListing />,
      },
      {
        path: "History",
        element: <ComingSoon />,
      },
      {
        path: "Analytics",
        element: <ComingSoon />,
      },
      {
        path: "patients/prescription-form/:id",
        element: <DoctorPrescriptionForm />,
      },
    ],
  },
  {
    path: "/consult/:id",
    element: <Consultation />,
  },
];
