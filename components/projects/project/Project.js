import { useState } from "react";
import Image from "next/image";
import classes from "./Project.module.css";
import { useInView } from "react-intersection-observer";

const Project = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <div
      className={`${classes.container} ${isVisible ? classes.isVisible : ""}`}
      ref={ref}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <Image
        src={project.image}
        alt="logo"
        width={300}
        height={300}
        className={classes.image}
      />
      <div className={classes.title}>{project.title}</div>
    </div>
  );
};

export default Project;
