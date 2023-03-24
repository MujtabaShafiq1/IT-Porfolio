import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Minimum characters: 3"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().required("Message is required").min(5, "Minimum characters: 5"),
});