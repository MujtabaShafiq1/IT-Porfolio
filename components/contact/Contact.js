import { useRef } from "react";
import Image from "next/image";
import classes from "./Contact.module.css";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";

    console.log(name, email, message);
  };

  return (
    <div className={classes.container} id="contact">
      <h1 className={classes.header}>
        Have Some <mark>Questions ?</mark>
      </h1>
      <div className={classes.formContainer}>
        <Image src="/images/email.png" width={450} height={500} quality={100} />
        <form className={classes.form} onSubmit={formHandler}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" required ref={messageRef} />
          </div>
          <div className={classes.actions}>
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
