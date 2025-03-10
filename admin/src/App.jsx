import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Additem from "./pages/Additem";
import Listitem from "./pages/Listitem";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Listitem />} />
        <Route path="/add" element={<Additem />} />
      </Routes> */}
      <div className="grid grid-cols-[40%_50%] gap-14 w-full m-10 mt-24">
    
<Additem />
   
<Listitem />
   
      </div>
    </div>
  );
};

export default App;
