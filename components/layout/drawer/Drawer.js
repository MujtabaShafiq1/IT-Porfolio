import ReactDOM from "react-dom";
import Navbar from "../navbar/Navbar";
import classes from "./Drawer.module.css";

const Drawer = () => {
  return ReactDOM.createPortal(
    <div className={classes.container}>
      <Navbar />
    </div>,
    document.getElementById("drawer")
  );
};

export default Drawer;
