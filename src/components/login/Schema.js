import * as Yup from "yup";

export const userSchema = Yup.object({
  name: Yup.string().min(4).max(25).required("Please enter your name"),

  email: Yup.string().email().required("Please enter your email"),

  password: Yup.string().min(8).required("Please enter your password") .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
  ),

confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required('Please confirm your password'),
 
});
