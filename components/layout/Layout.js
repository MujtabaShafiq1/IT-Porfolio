import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
