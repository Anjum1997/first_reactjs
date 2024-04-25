import * as Yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const userSchema = Yup.object({
  name: Yup.string().min(4).max(25).required("Please enter your name"),
  email: Yup.string().matches(emailRegex, 'Invalid email format').required("Please enter your email"),
  password: Yup.string().matches(passwordRegex, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number').required("Please enter your password"),
  confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});
