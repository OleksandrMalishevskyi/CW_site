import logo from "../logoCW.png";
import logo2 from "../IETiger_logo.png";

const Main = () => {
  return (
    <>
      <img src={logo} width={700} height={700} alt="logo" />
      {/* // what a fuck? */}
      <img src={logo2} width={70} height={70} alt="logo" />
    </>
  );
};

export default Main;
