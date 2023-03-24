import Image from "next/image";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Image src="/images/logo.png" alt="logo" width={70} height={70} />
      <p className={classes.footerDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan massa nec
        massa fermentum malesuada.
      </p>
      <div className={classes.footerInfo}>
        <p className={classes.details}>1234 Main St, Anytown USA</p>
        <p className={classes.details}>(123) 456-7890</p>
        <p className={classes.details}>© Lorem 2023.</p>
        <p className={classes.details}>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
