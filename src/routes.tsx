import { createBrowserRouter, Navigate } from "react-router";
import Root from "./Root";
import IgnitePage from "./pages/IgnitePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: IgnitePage },
      { path: "events/ignite2026", Component: IgnitePage },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
