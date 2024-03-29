const variantProps = {
  initial: "hidden",
  animate: "visible",
  hover: "hover",
  exit: "exit",
};

const landRVariant = (direction, delay = 0) => {
  return {
    hidden: {
      x: direction,
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 2,
        delay: delay,
      },
    },
  };
};

const aboutBlockContainer = {
  hidden: {
    backgroundColor: "#fff",
  },

  visible: {
    backgroundColor: "rgb(245, 243, 241)",
    transition: {
      type: "tween",
      duration: 2,
      delay: 2,
    },
  },
};

const pageVariant = (duration = 2, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },
  };
};

const slideFromTop = {
  hidden: {
    y: "-50vh",
  },

  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      // delay: 1,
    },
  },
};

const slideFromLeft = {
  hidden: {
    x: "-50vh",
  },

  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
      // delay: 1,
    },
  },
};

const cardHover = {
  hover: {
    scale: 1.1,
    transition: {
      type: "tween",
      yoyo: Infinity,
    },
  },
};

const dropVariant = {
  hidden: {
    height: "0px",
  },

  visible: {
    height: "100%",
    transition: {
      type: "tween",
      duration: 1,
    },
  },
  exit: { height: "0px", transition: { type: "tween", duration: 1 } },
};

// custom Hook to export the variants as needed
export const useVariants = () => {
  return {
    dropVariant,
    variantProps,
    cardHover,
    landRVariant,
    aboutBlockContainer,
    pageVariant,
    slideFromTop,
    slideFromLeft,
  };
};
