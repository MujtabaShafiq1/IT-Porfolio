import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const scrollHandler = (e) => {
    const section = document.querySelector(`#${e.target.getAttribute("data-value")}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveLink(e.target.getAttribute("data-value"));
  };

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.querySelector("#projects").offsetTop;
      const aboutSection = document.querySelector("#about").offsetTop;
      const contactSection = document.querySelector("#contact").offsetTop;
      const currentPosition = window.pageYOffset;

      if (currentPosition < projectsSection) {
        setActiveLink("");
      } else if (currentPosition >= projectsSection && currentPosition < aboutSection) {
        setActiveLink("projects");
      } else if (currentPosition >= aboutSection && currentPosition < contactSection) {
        setActiveLink("about");
      } else {
        setActiveLink("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  return (
    <nav className={classes.nav}>
      <ul>
        <li
          onClick={scrollHandler}
          data-value="projects"
          className={+(activeLink === "projects") && classes.active}>
          Projects
        </li>
        <li
          onClick={scrollHandler}
          data-value="about"
          className={+(activeLink === "about") && classes.active}>
          About
        </li>
        <li
          onClick={scrollHandler}
          data-value="contact"
          className={+(activeLink === "contact") && classes.active}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
