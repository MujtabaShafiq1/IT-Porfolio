import Head from "next/Head";
import Project from "./project/Project";
import classes from "./Projects.module.css";

const Projects = () => {
  const projectArray = [
    { title: "Lorem Ipsum", image: `/images/projects/project1.jpg`, date: "23rd March" },
    { title: "Lorem Ipsum", image: `/images/projects/project2.jpg`, date: "23rd March"},
    { title: "Lorem Ipsum", image: `/images/projects/project3.jpg`, date: "23rd March" },
    { title: "Lorem Ipsum", image: `/images/projects/project4.jpg`, date: "23rd March"},
    { title: "Lorem Ipsum", image: `/images/projects/project5.jpg`, date: "23rd March" },
    { title: "Lorem Ipsum", image: `/images/projects/project6.jpg`, date: "23rd March" },
  ];

  return (
    <>
      <div className={classes.container} id="projects">
        <h1 className={classes.header}>Projects</h1>
        <div className={classes.gridContainer}>
          {projectArray.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
