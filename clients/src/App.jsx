import React from "react";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="relative">
      <div className="absolute z-50">
        <Navbar />
      </div>
      <div className="ml-4">
        <LeftSideBar />
      </div>
      <div className="absolute lg:left-72 lg:right-5 top-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men category="men" />} />
          <Route path="/women" element={<Women category="women" />} />
          <Route path="/kids" element={<Kids category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":userId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
