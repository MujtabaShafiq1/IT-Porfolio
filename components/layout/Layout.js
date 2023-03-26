import MainNavigation from "./main-navigation/MainNavigation";
import Typewriter from "../typewriter/Typewriter";
import Footer from "./footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <Typewriter />
      <main className={classes.container}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
