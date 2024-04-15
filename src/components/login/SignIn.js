
import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "./Schema";
import './Form.css';
import logo1 from "../../assets/image/logo.png";

const initialValues = {
  email: "",
  password: "",
  confirm_password: "",
 
};

const SignIn = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
      
        action.resetForm();
      },
    });
  console.log(errors);

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
        <div className="social-media-icons">
          <ul>
            <li><i className="fab fa-facebook"></i></li>
         <li> <i className="fab fa-twitter"></i></li> 
          <li><i className="fab fa-google"></i></li> 
       <li>  <i className="fa-brands fa-linkedin"></i></li>
       </ul>
        </div>
        <div className="but">
          <button type="submit" className="login" >SignIN</button> 
        </div>
        <p className="sign-up">
                  Don't have an account? <Link to="/SignUp">SignUp  now</Link>
                </p>
     </form>
    </div>
    </div>
    </>
  );
};

export default SignIn;


