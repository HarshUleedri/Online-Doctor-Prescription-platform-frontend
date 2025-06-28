import PublicLayout from "@/Layout/PublicLayout";
import DoctorLogin from "@/pages/DoctorLogin/DoctorLogin";
import DoctorSignup from "@/pages/DoctorSignup/DoctorSignup";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Signup from "@/pages/Signup/Signup";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/doctor-login",
    element: <DoctorLogin />,
  },
  {
    path: "/doctor-signup",
    element: <DoctorSignup />,
  },
];
