import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import SideBar from "./components/Sidebar/Sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/DevMood">
    <div className="layout">
      <main>
        <App />
      </main>
      <SideBar />
    </div>
  </BrowserRouter>
);
