import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FooTer from "./components/FooTer";
import Main from "./pages/Main";
import OurServices from "./pages/OurServices";
import NetworkMeasurement from "./pages/NetworkMeasurement";
import FiberWelding from "./pages/FiberWelding";
import PriceList from "./pages/PriceList";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <FiberWelding />
      ) : (
        
          <Router>
            <div className="wrap">
              <Header />
              <div className="mainwrap">
                <Routes>
                  <Route path="/main" element={<Main />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/ourservices" element={<OurServices />} />
                  <Route
                    path="/networkmeasurement"
                    element={<NetworkMeasurement />}
                  />
                  <Route path="/fiberwelding" element={<FiberWelding />} />
                  <Route path="/pricelist" element={<PriceList />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/" element={<Main />} />
                </Routes>
              </div>
              <FooTer className="foter" />
            </div>
          </Router>
        
      )}
    </>
  );
};

export default App;
