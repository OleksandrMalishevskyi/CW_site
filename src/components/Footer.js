import "materialize-css";
import { Footer } from "react-materialize";
import logo2 from "../IETiger_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooTer = () => {
  return (
    <>
      <Footer
        className="example  cyan darken-4"
        copyrights={
          <>
            "Created by IETiger"
            <img src={logo2} width={20} height={20} alt="logo" />
          </>
        }
        links={
          <>
            <FontAwesomeIcon icon={faFacebook} size="2x" shake />
            <FontAwesomeIcon icon={faLinkedin} size="2x" bounce pull="left" />
          </>
        }
      >
        <h5 className="white-text">We are in Social Network</h5>
        <p className="grey-text text-lighten-4">
          We will be glad to see you! Welcome!
        </p>
      </Footer>
    </>
  );
};

export default FooTer;
