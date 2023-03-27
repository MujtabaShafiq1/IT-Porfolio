import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [activeLink, setActiveLink] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const scrollHandler = (e) => {
    const section = document.querySelector(`#${e.target.getAttribute("data-value")}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveLink(e.target.getAttribute("data-value"));
  };

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
    document.body.classList.toggle(classes.overflowHidden);
  };

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.querySelector("#projects").offsetTop;
      const aboutSection = document.querySelector("#about").offsetTop;
      const contactSection = document.querySelector("#contact").offsetTop - 50;
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

    if(openDrawer) setOpenDrawer(false)

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  return (
    <Fragment>
      <div className={`${openDrawer && classes.drawer}`}>
        <main className={classes.container}>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={65}
            height={65}
            data-value="home"
            onClick={scrollHandler}
          />
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
          <div
            className={`${classes.hamburger} ${openDrawer && classes.clicked}`}
            onClick={toggleDrawer}>
            <div className={classes.patty}></div>
            <div className={classes.patty}></div>
            <div className={classes.patty}></div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
