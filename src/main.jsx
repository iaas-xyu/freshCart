import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/css";
import "swiper/css/free-mode";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "flowbite";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter basename="/freshCart">
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
