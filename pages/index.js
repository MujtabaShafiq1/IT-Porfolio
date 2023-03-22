import { Fragment } from "react";
import Project from "../components/projects/Project";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Typewriter from "../components/typewriter/Typewriter";

export default function HomePage() {
  return (
    <Fragment>
      <Typewriter />
      <Project />
      <Contact />
      <About />
    </Fragment>
  );
}
