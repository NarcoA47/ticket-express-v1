import * as Yup from "yup";



const signupValidation = Yup.object({
  email: Yup.string()
    .email("You must enter a valid email address")
    .required("You must enter your email address"),
  password: Yup.string()
    .min(6, "This password is too short")
    .required("You must enter a password"),
  firstname: Yup.string()
    .min(2, "This is too short")
    .required("You must enter your firstname"),
  lastname: Yup.string()
    .min(2, "This is too short")
    .required("You must enter your lastname"),
  country: Yup.string().required("You must enter your country of residence"),
  zip: Yup.string()
    .matches(/^0*[1-9]\d*$/, "You must enter a valid postal code")
    .length(5, "You must enter a valid postal code")
    .required("You must enter you postal code"),
}).required();

export default signupValidation;
