import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Charaterers } from "./pages/Charaterers";
import { CharatererDetails } from "./pages/CharatererDetails";
import { Spells } from "./pages/Spells";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Charaterers />} />
        <Route path="/chatacters" element={<Charaterers />} />
        <Route path="/chatacters/:id" element={<CharatererDetails />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
