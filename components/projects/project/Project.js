import Image from "next/image";
import classes from "./Project.module.css";

const Project = ({ project }) => {
  return (
    <div className={classes.container}>
      <Image src={project.image} alt="logo" width={300} height={300} className={classes.image} />
      <div className={classes.title}>{project.title}</div>
    </div>
  );
};

export default Project;
