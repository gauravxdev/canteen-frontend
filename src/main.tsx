import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App";
import Error from "./components/Error";
import HomePage from "./components/HomePage";
import SnacksPage from "./components/SnacksPage";
import StudentsPage from "./components/StudentsPage";
import { StudentDetailPage } from "./pages/StudentDetailPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

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
        children: [
          {
            index: true,
            element: <StudentsPage />,
          },
          {
            path: ":studentId",
            element: <StudentDetailPage />,
          },
        ],
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" richColors />
    </QueryClientProvider>
  </StrictMode>
);