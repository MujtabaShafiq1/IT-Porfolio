import { Fragment, useState } from "react";
import Image from "next/image";

import Drawer from "../drawer/Drawer";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [activeLink, setActiveLink] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  const scrollHandler = (e) => {
    const section = document.querySelector(`#${e.target.getAttribute("data-value")}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveLink(e.target.getAttribute("data-value"));
  };

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
              className={activeLink === "projects" ? classes.active : ""}>
              Projects
            </li>
            <li
              onClick={scrollHandler}
              data-value="about"
              className={activeLink === "about" ? classes.active : ""}>
              About
            </li>
            <li
              onClick={scrollHandler}
              data-value="contact"
              className={activeLink === "contact" ? classes.active : ""}>
              Contact
            </li>
          </ul>
        </nav>
        <div
          className={`${classes.hamburger} ${openDrawer ? classes.clicked : ""}`}
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
