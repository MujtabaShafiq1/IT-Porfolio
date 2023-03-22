import { useState, useEffect } from "react";
import classes from "./Typewriter.module.css";

const Typewriter = () => {
  const textArray = [
    "Lorem Ipsum is simply dummy text.",
    "Printing and typesetting industry.",
    "When an unknown printer took a galley.",
    "It was popularised in the 1960s.",
    "More recently with desktop publishing software.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const text = textArray[currentTextIndex];
      const newText = isDeleting
        ? text.substring(0, currentText.length - 1)
        : text.substring(0, currentText.length + 1);

      if (newText !== currentText) {
        setCurrentText(newText);
      } else {
        setIsDeleting(true);
      }

      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
      }
    }, isDeleting ? 50: 200);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, textArray]);

  return (
    <div className={classes.typewriter}>
      <span className={classes.welcome}>Welcome,</span>
      <div>
        <span className={classes.text}>{currentText}</span>
        <span className={classes.cursor}></span>
      </div>
    </div>
  );
};

export default Typewriter;
