import { useRef } from "react";
import Image from "next/image";
import classes from "./Contact.module.css";
import { contactSchema } from "@/helpers/validationSchema";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const formHandler = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      await contactSchema.validate(formData);
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      console.log(formData);
    } catch (error) {
      console.log(error)
    }
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
            <input type="text" id="name" placeholder="Your name" required ref={nameRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Message" required ref={messageRef} />
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
