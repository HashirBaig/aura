import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import LandingPage from "@/pages/LandingPage";

import "./App.css";

function App() {
  return (
    <div className="app dark">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Toaster richColors position="bottom-center" />
    </div>
  );
}

export default App;
