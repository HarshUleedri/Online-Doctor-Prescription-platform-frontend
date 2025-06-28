import ProtectedLayout from "@/Layout/ProtectedLayout";

export const ProtectedRoutes = [
  {
    path: "/doctor/dashboard",
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        path: "",
        element: <div>Doctor Dashboard</div>,
      },
    ],
  },
];
