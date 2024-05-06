import * as Yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const signupSchema = Yup.object({
  name: Yup.string().min(4).max(25).required("Please enter your name"),
  email: Yup.string().matches(emailRegex, 'Invalid email format').required("Please enter your email"),
  password: Yup.string().matches(passwordRegex, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number').required("Please enter your password"),
  confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export const signinSchema = Yup.object({
  email: Yup.string().matches(emailRegex, 'Invalid email format').required("Please enter your email"),
  password: Yup.string().matches(passwordRegex, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number').required("Please enter your password"),
});


export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email("Please Enter an Valid Email.").required("Please Enter your Email."),
});


export const resetPasswordSchema = Yup.object({
  password: Yup.string().matches(passwordRegex, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number').required("Please enter your new password"),
  confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your new password'),
});

export const contactSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    message: Yup.string().required('Message is required'),
  });

