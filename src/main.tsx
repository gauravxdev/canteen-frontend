import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

import "./index.css";
import App from "./App"; // omit extension for clarity
import Error from "./components/Error"; // omit extension
import HomePage from "./components/HomePage";
import SnacksPage from "./components/SnacksPage";
import StudentsPage from "./components/StudentsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/snacks",
        element: <SnacksPage />,
      },
      {
        path: "/students",
        element: <StudentsPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element not found — ensure <div id='root'></div> exists in index.html");
}

createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="bottom-right" richColors />
  </StrictMode>
);