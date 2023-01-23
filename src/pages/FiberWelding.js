import "../index.css";
import { useSpring, useSpringRef, animated, useChain } from "react-spring";

const FiberWelding = () => {
  const text1Ref = useSpringRef();
  const text2Ref = useSpringRef();
  const text3Ref = useSpringRef();
  const imgRef = useSpringRef();

  const text1Style = useAnimation(text1Ref);
  const text2Style = useAnimation(text2Ref);
  const text3Style = useAnimation(text3Ref);

  const imgStyle = useSpring({
    to: {
      opacity: 1
    },
    from: {
      opacity: 0
    },
    ref: imgRef
  })

  useChain([text1Ref, text2Ref, text3Ref, imgRef]);

  return (
    <div>
      <animated.h1 style={text1Style}>Welcome</animated.h1>
      <animated.h1 style={text2Style}>To</animated.h1>
      <animated.h1 style={text3Style}>The</animated.h1>
      <animated.img src="images/FOT.jpg" height={200} alt="" style={imgStyle} />
    </div>
  );
}

const useAnimation = (ref) => {
  const spring = useSpring({
    from: {
      opacity: 0,
      position: "absolute",
      transform: "scale(0.2)"
    },
    to: [
    {
      opacity: 1,
      transform: "scale(2.0)"
    },
    {
      opacity:0,
      transform: "scale(0.5)"
    
    }
  ],
    ref: ref,
  });
  return spring;
};

export default FiberWelding;
