import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ClientsContext from "./clientContext/clientsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClientsContext>
      <StrictMode>
        <App />
      </StrictMode>
    </ClientsContext>
  </BrowserRouter>
);
