import Image from "next/image";
import { useState, useEffect } from "react";
import classes from "./About.module.css";

const About = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentImage === 6) {
        setCurrentImage(1);
      } else {
        setCurrentImage((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(timeout);
  }, [currentImage]);

  return (
    <div className={classes.container} id="about">
      <div className={classes.textContainer}>
        <h1 className={classes.header}>
          Join Our <mark>Team</mark>
        </h1>
        <p className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s.
        </p>
        <div class="grid-container">
          <div>
            <span className={classes.text}>
              <mark>5</mark> countries
            </span>
            <span className={classes.text}>
              <mark>12</mark> years
            </span>
          </div>
          <div>
            <span className={classes.text}>
              <mark>3</mark> brands
            </span>
            <span className={classes.text}>
              <mark>1000+</mark> members
            </span>
          </div>
        </div>
      </div>
      <Image
        src={`/images/projects/project${currentImage}.jpg`}
        alt="about-image"
        width={650}
        height={750}
        quality={100}
      />
    </div>
  );
};

export default About;
