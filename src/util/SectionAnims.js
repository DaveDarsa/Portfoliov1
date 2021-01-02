import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const SectionAnims = () => {
  const [ref, inView] = useInView();
  const animtoUse = useAnimation();
  if (inView) {
    animtoUse.start("visible");
  } else {
    animtoUse.start("hidden");
  }

  return [ref, animtoUse];
};

export default SectionAnims;
