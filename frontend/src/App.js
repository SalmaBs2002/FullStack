import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserManagementPage from "./pages/UserManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserManagementPage />} />
      </Routes>
    </Router>
  );
}

export default App;
