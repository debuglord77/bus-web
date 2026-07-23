import { Routes, Route } from "react-router-dom";
import "./App.css";


import Passes from "./pages/Passes";
import Home from "./pages/Home";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/passes" element={<Passes />} />
    </Routes>
  );
}

export default App;