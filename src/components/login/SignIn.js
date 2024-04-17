
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "./Schema";
 import { useAuthContext } from "../context/AuthContext";

import './Form.css';
import logo1 from "../../assets/image/logo.png";

const initialValues = {
  email: "",
  password: "",
  confirm_password: "",
 
};

const SignIn = () => {
  const { signin , googleSignIn} = useAuthContext();
const navigate = useNavigate();


   const handleEmailPasswordSignIn = async ( e, values) => {
    e.preventDefault();
    
    try {
      await signin(values.email, values.password);
      
      navigate("/Home"); 
      
    } catch (error) {
      console.error("Error signing in with email and password:", error);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Home");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
        handleEmailPasswordSignIn(values);
      },
    });


  return (
    <>
          <div className="modal-container">
            <div className="modal">
              <div className="modal_">
              <img src= {logo1} alt="Logo" className="log" /> 
                           <h2>Login</h2>
                           </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      Email:
                    </label>
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
                    <label>
                      Password:
                    </label>
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
                  <div className="form-group">
                    <label>
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     <i className=" fas fa-eye-slash"></i> 
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                     
                  </div>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="but">
          <button type="submit" className="login" >SignIN</button> 
        </div>
     </form>
     <div className="google_">
     <button type="button"  className ="google" onClick={handleGoogleSignIn}>Sign in with Google</button>
     </div>
     <div className="account">
     <p className="sign-up">
                  Don't have an account? <Link to="/SignUp">SignUp  now</Link>
                </p>
               </div>
    </div>
    </div>
    </>
  );
};

export default SignIn;


