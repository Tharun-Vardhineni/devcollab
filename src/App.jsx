import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./pages/Router";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./Index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
