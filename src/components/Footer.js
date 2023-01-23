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
            <img src={logo2} width={40} height={40} alt="logo" />
          </>
        }
        links={
          <>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100013871226809" rel="noreferrer" >
            <FontAwesomeIcon icon={faFacebook} size="2x" color="white" shake />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/oleksandr-malishevskyi-66a95b1b9/" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" bounce pull="left" />
            </a>
          </>
        }
      >
        <h5 className="white-text">We are in Social Network</h5>
      </Footer>
    </>
  );
};

export default FooTer;
