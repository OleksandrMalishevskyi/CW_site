import logo from '../logoCW.png'
import { Link } from "react-router-dom";



import { Navbar, Icon } from "react-materialize";

const Header = () => {
  return (
    <>
      <Navbar
        className="light-blue lighten-1"
        alignLinks="right"
        brand={
          <Link to="/main" className="brand-logo">
            <img src={logo} width={70} height={70} alt="logo" />
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

export default Header;
