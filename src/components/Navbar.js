import React from "react";
import {Link} from 'react-router-dom' 

const Navbar = () => {
  return (
    <>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container">
          <Link to="/main" id="logo-container" className="brand-logo">
          <img width="77" src="images/logo.png" />
          </Link>
          <ul className="right hide-on-med-and-down">
              <li><Link to="/main">Main</Link></li>
              <li><Link to="/structuredcabling">Structured Cabling</Link></li>
              <li><Link to="/somemeasurement">Some Measurement</Link></li>
              <li><Link to="/fiberwelding">FiberWelding</Link></li>
              <li><Link to="/pricelist">PriceList</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
                      </ul>

          <ul id="nav-mobile" className="sidenav">
              <li><Link to="/main">Main</Link></li>
              <li><Link to="/structuredcabling">Structured Cabling</Link></li>
              <li><Link to="/somemeasurement">Some Measurement</Link></li>
              <li><Link to="/fiberwelding">FiberWelding</Link></li>
              <li><Link to="/pricelist">PriceList</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
             </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
