import React, { Fragment } from "react";
import GlobalStyles from "./components/GlobalStyles";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
//needed modules
import { Switch, Route, useLocation } from "react-router-dom";
// import { useInView } from "react-intersection-observer";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
