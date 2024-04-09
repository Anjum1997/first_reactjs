import React from "react";
import { useFormik } from "formik";
import {userSchema }from "./Schema.js";
import './LoginRegisterForm.css';
import logo1 from "../../assets/image/logo.png";


const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema:userSchema,
      validateOnChange: true,
      validateOnBlur: false,
      ///By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {

        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <>
   
   <div className='form_'>
    <div className="login-form">
 <form onSubmit={handleSubmit}>
                <img src= {logo1} alt="Logo" className="log" /> 
                 <h2>Register</h2>
                  <div className="form-group">
                    <label> Name:
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>
                      Email:
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
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
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>
                      confirm_Password:
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <button className="login-button" type="submit">
                      Registration
                    </button>
                   </div>
                </form>
              </div>
              </div>
        
      </>
  
  );
};


export default Register;
