import "materialize-css";
import { Parallax } from "react-materialize";

const Main = () => {
  return (
<div>
  <Parallax
    image={<img alt="" src="images/foto-cable1.avif"/>}
    options={{
      responsiveThreshold: 0
    }}
  />
  <div className="section white">
    <div className="row container">
      <h2 className="header">
      CABLE NETWORK
      </h2>
      <p className="grey-text text-darken-3 lighten-3">
        Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
      </p>
    </div>
  </div>
  <Parallax
    image={<img alt="" src="images/foto-fiber1.avif"/>}
    options={{
      responsiveThreshold: 0
    }}
  />
    <div className="section white">
    <div className="row container">
      <h2 className="header">
        FIBER NETWORK
      </h2>
      <p className="grey-text text-darken-3 lighten-3">
        Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
      </p>
    </div>
  </div>
    <Parallax
    image={<img alt="" src="images/foto-switch1.avif"/>}
    options={{
      responsiveThreshold: 0
    }}
  />
  <div className="section white">
    <div className="row container">
      <h2 className="header">
        NETWORK EQUIPMENT AND OTHER
      </h2>
      <p className="grey-text text-darken-3 lighten-3">
        Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
      </p>
    </div>
  </div>
  <Parallax
    image={<img alt="" src="images/foto-pr1.avif"/>}
    options={{
      responsiveThreshold: 0
    }}
  />
</div>
  );
};

export default Main;
