import { Fragment } from "react";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Typewriter from "../components/typewriter/Typewriter";

const HomePage = () => {
  return (
    <Fragment>
      <Typewriter />
      <Projects />
      <About />
      <Contact />
    </Fragment>
  );
};

export default HomePage;
