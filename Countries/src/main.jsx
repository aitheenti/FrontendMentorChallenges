import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import CountryDetail from "./pages/CountriesDetail.jsx";
import Countries from "./pages/Countries.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:id" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
