import PublicLayout from "@/Layout/PublicLayout";
import ComingSoon from "@/pages/Dashboard/PatientDashboard/components/ComingSoon";
import DoctorLogin from "@/pages/DoctorSignin/DoctorSignin";
import DoctorSignup from "@/pages/DoctorSignup/DoctorSignup";
import DoctorListing from "@/pages/DoctorsListing/DoctorListing";
import Home from "@/pages/Home/Home";
import PatientLogin from "@/pages/PatientSignin/PatientSignin";
import PatientSignup from "@/pages/PatientSignup/PatientSignup";

export const PublicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true, // This will render the Home component when the path is "/"
        path: "",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <DoctorListing />,
      },
      {
        path: "/about-us",
        element: <ComingSoon />,
      },
      {
        path: "/contact-us",
        element: <ComingSoon />,
      },
    ],
  },
  {
    path: "/patient/signin",
    element: <PatientLogin />,
  },
  {
    path: "/patient/signup",
    element: <PatientSignup />,
  },
  {
    path: "/doctor/signin",
    element: <DoctorLogin />,
  },
  {
    path: "/doctor/signup",
    element: <DoctorSignup />,
  },
];
