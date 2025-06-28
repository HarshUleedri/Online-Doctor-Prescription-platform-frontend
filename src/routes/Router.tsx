import { createBrowserRouter, RouterProvider } from "react-router";
import { PublicRoutes } from "./PublicRoutes/PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes/ProtectedRoutes";
import NotFound from "@/pages/NotFound/NotFound";

const Router = () => {
  const router = createBrowserRouter([
    ...PublicRoutes,
    ...ProtectedRoutes,
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
