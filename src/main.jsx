import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind CSS import
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./pages/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
