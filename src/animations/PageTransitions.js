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

export default TransitionVariants;
