import Image from "next/image";
import Link from "next/link";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={65} height={65} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.hamburger}>
        <div className={classes.patty}></div>
        <div className={classes.patty}></div>
        <div className={classes.patty}></div>
      </div>
    </header>
  );
};

export default MainNavigation;
