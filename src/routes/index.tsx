import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Page404 } from "../pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/details/:id", element: <Details /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
