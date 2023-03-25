import Project from "./project/Project";
import classes from "./Projects.module.css";

const Projects = () => {
  const projectArray = [
    { title: "Lorem Ipsum 1", image: `/images/projects/project1.jpg` },
    { title: "Lorem Ipsum 2", image: `/images/projects/project2.jpg` },
    { title: "Lorem Ipsum 3", image: `/images/projects/project3.jpg` },
    { title: "Lorem Ipsum 4", image: `/images/projects/project4.jpg` },
    { title: "Lorem Ipsum 5", image: `/images/projects/project5.jpg` },
    { title: "Lorem Ipsum 6", image: `/images/projects/project6.jpg` },
  ];

  return (
    <>
      <div className={classes.container} id="projects">
        <h1 className={classes.header}>
          Our <mark>Projects</mark>
        </h1>
        <div className={classes.gridContainer}>
          {projectArray.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
