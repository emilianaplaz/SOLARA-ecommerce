// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <div className="h-full">
      {" "}
      {/* This is the key line */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
