export const TransitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
//navigation variant
export const NavVariants = {
  hidden: {
    y: -150,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 30,
    },
  },
};
//right panel description variant
export const DescVariants = {
  initial: {
    opacity: 0,
    // scale: 0.98,
  },
  animate: (i) => ({
    opacity: 1,
    // scale: 1,
    transition: {
      duration: 1,
      delay: i + 1,
    },
  }),
  exit: {
    opacity: 0,
    // scale: 0.98,
  },
};
//the slider variant
export const TransitionElemVars = {
  initial: {
    x: "-101vw",
  },
  animate: {
    x: "101vw",
    transition: {
      type: "spring",
      duration: 2.8,
      delay: 0.25,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 3.5,
    },
  },
};
//skills section
export const sectionVars = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
// //portfolio section
// export const portVariants = {
//   hidden: {
//     filter: "blur(20%)",
//   },
//   visible: {
//     filter: "blur(0)",
//   },
// };
export default TransitionVariants;
