import * as Yup from "yup";

export const contactFormSchema = Yup.object({
  topic: Yup.string().required("Topic is required"),
  fullName: Yup.string().required("Name is required"),
  company: Yup.string().required("Company name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  location: Yup.string().required("Location is required"),
  message: Yup.string().required("Message is required"),
});
