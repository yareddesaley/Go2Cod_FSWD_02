import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Additem from "./pages/Additem";
import Listitem from "./pages/Listitem";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Additem />} />
        <Route path="/list of products" element={<Listitem />} />
      </Routes>
    </div>
  );
};

export default App;
