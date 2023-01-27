import "../index.css";
import { useSpring, useSpringRef, animated, useChain } from "react-spring";

const FiberWelding = () => {
  const text1Ref = useSpringRef();
  const text2Ref = useSpringRef();
  const text3Ref = useSpringRef();
  const imgRef = useSpringRef();

  const text1Style = useAnimation(text1Ref);
  const text2Style = useAnimation(text2Ref);

  const imgStyle = useSpring({
    from: {
      opacity: 0,
      scale: 1.5,
    },
    to: {
      opacity: 1,
      scale: 1,
    },
    ref: imgRef,
  });

  useChain([text1Ref, text2Ref, text3Ref, imgRef]);

  return (
    <div className="presentation">
      <animated.img style={imgStyle} src="/logoCW.png" alt="" />
      <animated.h1 style={text1Style}>CW Krzysztof Kijewski</animated.h1>
      <animated.h1 style={text2Style}>Pomiary Sieciowe</animated.h1>
    </div>
  );
};

const useAnimation = (ref) => {
  const spring = useSpring({
    from: {
      opacity: 0,
      scale: 1.2,
    },
    to: {
      opacity: 1,
      scale: 1,
    },

    ref: ref,
  });
  return spring;
};

export default FiberWelding;
