import { Fragment , useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Drawer from "../drawer/Drawer";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <Fragment>
      {openDrawer && <Drawer />}

      <header className={classes.header}>
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={65} height={65} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="#project">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
          </ul>
        </nav>
        <div className={`${classes.hamburger} ${openDrawer ? classes.clicked : ''}`} onClick={toggleDrawer}>
          <div className={classes.patty}></div>
          <div className={classes.patty}></div>
          <div className={classes.patty}></div>
        </div>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
