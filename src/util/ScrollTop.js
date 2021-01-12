const ScrollTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return null;
};
export const scrollTo = (location) => {
  const elem = document.getElementById(location);
  elem.scrollIntoView({
    behavior: "smooth",
  });
  return null;
};
export default ScrollTop;
