import React from "react";
import { useFormik } from "formik";
import { userSchema } from "./Schema";
import './Form.css';
import logo1 from "../../assets/image/logo.png";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
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
                           <h2>SignUp</h2>
                           </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label> Name:</label>
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
                    {errors.name && touched.name ? (
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
                      placeholder="Password"
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
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     <i className=" fas fa-eye-slash"></i> 
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                     
                  </div>
                  <div className="modal-buttons">
                    <div className="mail">  <a href="#">
                      Want to signup using Gmail?
                    </a></div>
                    <div className="but">
                    <button className="login" type="submit">
                    SignUp
                    </button>
                    </div>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="#">Sign In now</a>
                </p>
              </div>
            
              </div>
           
       
    </>
  );
};


 export default SignUp;
  