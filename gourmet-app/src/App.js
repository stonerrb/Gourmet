import React from "react";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <BrowserRouter>
            <Routes>
            <Route path="/login" element={<Login />} />
            </Routes>
            </BrowserRouter> */}
    </div>
  );
};

export default App;
