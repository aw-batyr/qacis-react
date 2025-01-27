import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, B2b, Delegate, About } from "./pages";

import "./index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "",
      },
      {
        element: <B2b />,
        path: "B2B-B2G",
      },
      {
        element: <Delegate />,
        path: "delegate-form",
      },
      {
        element: <About />,
        path: "about",
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
