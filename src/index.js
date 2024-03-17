import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAll from "./Componant/GetAll";
import GetByID from "./Componant/GetById";
import TravelAdd from "./Componant/TravelAdd";
import TravelUpdate from "./Componant/TravelUpdate";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetAll />} />
        <Route path="/:id" element={<GetByID />} />
        <Route path="/add" element={<TravelAdd />} />
        <Route path="/:id/edit" element={<TravelUpdate />} />
      </Routes>
    </BrowserRouter>
  </>
);
