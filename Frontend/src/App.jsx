import React from 'react';
import Home from './Home/Home';
import Products from './Products/Products';
import Signup from './components/Signup';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} /> {/* Changed to plural for consistency */}
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<h2>404 Not Found</h2>} /> {/* Fallback for 404 */}
    </Routes>
  );
}

export default App;
