import logo from '../logoCW.png'
import { NavLink } from "react-router-dom";



import { Navbar, Icon } from "react-materialize";

const Header = () => {
  return (
    <>
      <Navbar
        className="light-blue lighten-1"
        alignLinks="right"
        brand={
          <NavLink to="/main" className="brand-logo">
            <img src={logo} width={70} height={70} alt="logo" />
          </NavLink>
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
        <NavLink to="/main">MAIN</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/ourservices">OUR SERVICES</NavLink>
        <NavLink to="/networkmeasurement">NETWORK MEASUREMENTS</NavLink>
        <NavLink to="/fiberwelding">FiberWelding</NavLink>
        <NavLink to="/pricelist">PriceList</NavLink>
                <NavLink to="/contacts">CONTACTS</NavLink>
      </Navbar>
    </>
  );
};

export default Header;
