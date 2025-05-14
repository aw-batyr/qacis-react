import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  B2b,
  Delegate,
  About,
  News,
  NewsInner,
  BecomeSponsor,
  Speakers,
  Faq,
  Participants,
  Media,
  Presentations,
} from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App";
import Contacts from "./pages/contacts";

import "./i18n";

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
        path: "become-delegate",
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <News />,
        path: "news",
      },
      {
        element: <NewsInner />,
        path: "news/:id",
      },
      {
        element: <BecomeSponsor />,
        path: "become-sponsor",
      },
      {
        element: <Contacts />,
        path: "contacts",
      },
      {
        element: <Speakers />,
        path: "speakers",
      },
      {
        element: <Faq />,
        path: "faq",
      },
      {
        element: <Participants />,
        path: "participants",
      },
      {
        element: <Media />,
        path: "media",
      },
      {
        element: <Presentations />,
        path: "presentations",
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
