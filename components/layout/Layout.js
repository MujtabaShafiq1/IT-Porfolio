import MainNavigation from "./main-navigation/MainNavigation";
import Footer from "./footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
