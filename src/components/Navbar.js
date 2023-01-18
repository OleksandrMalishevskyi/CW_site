import React from "react";
import { Link } from "react-router-dom";

import "materialize-css";
import { Navbar, Icon } from "react-materialize";

const NavBar = () => {
  return (
    <>
      <Navbar
        className="light-blue lighten-1"
        alignLinks="right"
        brand={
          <Link to="/main" className="brand-logo">
            Logo
          </Link>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <Link to="/main">Main</Link>
        <Link to="/structuredcabling">Structured Cabling</Link>
        <Link to="/somemeasurement">Some Measurement</Link>
        <Link to="/fiberwelding">FiberWelding</Link>
        <Link to="/pricelist">PriceList</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </Navbar>
    </>
  );
};

export default NavBar;
