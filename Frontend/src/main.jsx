import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/queryClient.js";
import { AuthProvider } from "../context/AuthContext.jsx";
import { UIProvider } from "../context/UIContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UIProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </UIProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
