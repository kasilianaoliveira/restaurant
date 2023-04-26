import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./scss/global.scss";
import { CategoriaContextProvider } from "./context/CategoriaContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CategoriaContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CategoriaContextProvider>
);

reportWebVitals();
