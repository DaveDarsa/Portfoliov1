import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const SliderWatcher = () => {
  const [elemRef, inView] = useInView();
  //the skill shortcuts that will alternate their visibility
  const [rightPanel, setRightPanel] = useState([]);
  //the current skill item index
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setRightPanel(document.querySelectorAll(".skilldesc"));
  }, [elemRef]);

  //display toggle function
  const toggleShowing = () => {
    rightPanel.forEach((divItem, idx) => {
      if (idx !== current) {
        divItem.style.visibility = "hidden";
      } else {
        divItem.style.visibility = "visible";
      }
    });
    if (current >= 2) setCurrent(0);
    else {
      setCurrent(current + 1);
    }
  };
  //Toggle the components ONCE each time the slider is in view
  useEffect(() => {
    if (inView) {
      //a little delay so it transitions well with the moving animation
      setTimeout(() => {
        toggleShowing();
      }, 370);
    }
    //eslint-disable-next-line
  }, [inView]);

  return elemRef;
};

export default SliderWatcher;
