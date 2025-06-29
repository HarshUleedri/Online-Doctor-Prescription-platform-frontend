import ProtectedLayout from "@/Layout/ProtectedLayout";

export const ProtectedRoutes = [
  {
    path: "/dashboard",
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        path: "",
        element: <div> Dashboard</div>,
      },
    ],
  },
];
