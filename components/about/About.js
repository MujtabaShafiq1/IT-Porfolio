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

  const scrollHandler = (e) => {
    const section = document.querySelector(`#contact`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={classes.container} id="about">
      <div className={classes.textContainer}>
        <h1 className={classes.header}>
          Join Our <mark>Team</mark>
        </h1>
        <p className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className={classes.gridContainer}>
          <div className={classes.text}>
            <mark>5</mark> countries
          </div>
          <div className={classes.text}>
            <mark>12</mark> years
          </div>
          <div className={classes.text}>
            <mark>3</mark> brands
          </div>
          <div className={classes.text}>
            <mark>1000+</mark> members
          </div>
        </div>
        <button className={classes.button} onClick={scrollHandler}>
          Join us now
        </button>
      </div>

      <Image
        src={`/images/projects/project${currentImage}.jpg`}
        alt="about-image"
        width={650}
        height={650}
        quality={100}
        className={classes.image}
      />
    </div>
  );
};

export default About;
