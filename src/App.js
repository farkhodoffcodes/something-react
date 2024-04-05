import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./components/Categories";
import Receipts from "./components/Receipts";
import Delivery from "./components/Delivery/Delivery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/receipts" element={<Receipts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
