import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Details } from "../pages/Details";
import { Page404 } from "../pages/Page404";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/details/:id", element: <Details /> },
  { path: "*", element: <Page404 /> },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
