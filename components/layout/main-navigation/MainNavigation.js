import { Fragment, useState, useEffect } from "react";
import Image from "next/image";

import Drawer from "../drawer/Drawer";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [activeLink, setActiveLink] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
    document.body.classList.toggle(classes.overflowHidden);
  };

  const scrollHandler = (e) => {
    const section = document.querySelector(`#${e.target.getAttribute("data-value")}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveLink(e.target.getAttribute("data-value"));
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the position of each section on the page
      const projectsSection = document.querySelector("#projects").offsetTop;
      const aboutSection = document.querySelector("#about").offsetTop;
      const contactSection = document.querySelector("#contact").offsetTop;
      const currentPosition = window.pageYOffset;

      // Determine which section the user is currently viewing
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

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {openDrawer && <Drawer />}

      <header className={classes.header}>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={65}
          height={65}
          data-value="home"
          onClick={scrollHandler}
        />
        <nav>
          <ul>
            <li
              onClick={scrollHandler}
              data-value="projects"
              className={activeLink === "projects" && classes.active}>
              Projects
            </li>
            <li
              onClick={scrollHandler}
              data-value="about"
              className={activeLink === "about" && classes.active}>
              About
            </li>
            <li
              onClick={scrollHandler}
              data-value="contact"
              className={activeLink === "contact" && classes.active}>
              Contact
            </li>
          </ul>
        </nav>
        <div
          className={`${classes.hamburger} ${openDrawer && classes.clicked}`}
          onClick={toggleDrawer}>
          <div className={classes.patty}></div>
          <div className={classes.patty}></div>
          <div className={classes.patty}></div>
        </div>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
