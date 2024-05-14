import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signinSchema } from "./Schema";
import { useAuthContext } from "../context/AuthContext";
import './Form.css';
import icon from "../../assets/image/form-icon.jpg"; 
import googleIcon from "../../assets/image/google.png";
import Navbar from "../navbar/Navbar";


const initialValues = {
  email: "",
  password: "",
 

};

const SignIn = () => {
  const { signinWithEmailPassword, signinWithGoogle, error } = useAuthContext();
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();
 

  const handleSignIn = async (values) => {
    try {
       await signinWithEmailPassword(values.email, values.password);
      navigate('/');
    } catch (error) {
      setFormError(error.message);
     
    }
  };

  const handleGoogleSignIn = async () => {
    try {
     await signinWithGoogle();
      navigate('/home');
    } catch (error) {
      setFormError(error.message);
     
    }
  };

  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      
      initialValues,
      validationSchema: signinSchema,
      onSubmit: (values) => {
        handleSignIn(values);
      },
    });

  return (
    <>
      <Navbar />
        <div className="Signin">
          <div className="modal_login">
            <img src={icon} alt="Logo" className="log" />
            <h2>Login</h2>
          </div>
          <form  className="form_login" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <i className="fas fa-envelope"></i>
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <i className=" fas fa-eye-slash"></i>
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
            
        <div className="forgot-password">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
        <div className="but">
          <button  className="login" type="submit">SignIN</button> 
        </div>
     </form>
     <div className="google_">
     <button className="google" onClick={handleGoogleSignIn}>
            <img src={googleIcon} alt="Google Icon" className="google-icon" />
            Sign In with Google
          </button>
        {error && <p>{error}</p>}
     </div>
     <div className="account">
     <p className="sign-up">
                  Don't have an account? <Link to="/signup">SignUp  now</Link>
                </p>
                </div>
                {formError && <p className="form-error">{formError}</p>}
          {error && <p className="form-error">{error}</p>}
       
               </div>
    

   
    </>
  );
};

export default SignIn;