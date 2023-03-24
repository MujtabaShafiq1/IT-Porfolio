import Image from "next/image";
import classes from "./Project.module.css";

const Project = ({ project }) => {
  return (
    <div className={classes.container}>
      <Image src={project.image} alt="logo" width={300} height={300} />
      <span>{project.title}</span>
      <span>{project.date}</span>
    </div>
  );
};

export default Project;
