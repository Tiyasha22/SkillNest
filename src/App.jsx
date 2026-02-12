import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <AppRoutes />
      <Navbar />
    </>
  );
}

export default App;
