import { Fragment } from "react";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";

const HomePage = () => {
  return (
    <Fragment>
      <Projects />
      <About />
      <Contact />
    </Fragment>
  );
};

export default HomePage;
