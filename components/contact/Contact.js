import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "@/helpers/validationSchema";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./Contact.module.css";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    toast.info("Sending your response...");

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      return toast.error(data.message || "Something went wrong!");
    }
    toast.success(data.message);
    resetForm();
  };

  return (
    <div className={classes.container} id="contact">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
      <h1 className={classes.header}>
        Have Some <mark>Questions ?</mark>
      </h1>

      <div className={classes.formContainer}>
        <Image
          src="/images/email.png"
          alt="email"
          width={450}
          height={500}
          quality={100}
          className={classes.image}
        />

        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}>
          {(formik) => (
            <Form className={classes.form}>
              <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <ErrorMessage name="name" component="div" className={classes.error} />
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  autoComplete="off"
                  className={`${classes.input} ${
                    formik.touched.name && formik.errors.name && classes.invalid
                  }`}
                />
              </div>

              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <ErrorMessage name="email" component="div" className={classes.error} />
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="off"
                  className={`${classes.input} ${
                    formik.touched.email && formik.errors.email && classes.invalid
                  }`}
                />
              </div>

              <div className={classes.control}>
                <label htmlFor="message">Message</label>
                <ErrorMessage name="message" component="div" className={classes.error} />
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  autoComplete="off"
                  className={`${classes.input} ${
                    formik.touched.message && formik.errors.message && classes.invalid
                  }`}
                />
              </div>

              <div>
                <button type="submit" disabled={!formik.isValid}>
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
