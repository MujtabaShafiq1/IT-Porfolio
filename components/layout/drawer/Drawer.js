import ReactDOM from "react-dom";
import classes from "./Drawer.module.css";

const Drawer = () => {
  return ReactDOM.createPortal(
    <div className={classes.container}>drawer</div>,
    document.getElementById("drawer")
  );
};

export default Drawer;
