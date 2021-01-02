import React, { Fragment } from "react";
import GlobalStyles from "./components/styles/GlobalStyles";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";
//needed modules
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//auto top scroll on route changes:
import ScrollTop from "./util/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <GlobalStyles />
      <ScrollTop />
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
      <Footer />
    </Fragment>
  );
}

export default App;
