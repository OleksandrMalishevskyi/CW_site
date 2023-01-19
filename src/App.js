import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import FooTer from "./components/FooTer";
import Main from './pages/Main'
import StructuredCabling from './pages/StructuredCabling'
import SomeMeasurement from './pages/SomeMeasurement'
import FiberWelding from './pages/FiberWelding'
import PriceList from './pages/PriceList'
import About from './pages/About'
import Contacts from './pages/Contacts'


import "materialize-css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/structuredcabling" element={<StructuredCabling />} />
        <Route path="/somemeasurement" element={<SomeMeasurement />} />
        <Route path="/fiberwelding" element={<FiberWelding />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <FooTer />
    </Router>
  );
};

export default App;