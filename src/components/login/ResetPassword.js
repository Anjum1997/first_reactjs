import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import {  resetPasswordSchema } from "./Schema"; 
import { useAuthContext } from "../context/AuthContext";
import './Form.css';
import icon from "../../assets/image/form-icon.jpg";

const ResetPassword = () => {
  const { resetPasswordWithToken, error } = useAuthContext();
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();
  const { token } = useParams(); 



  
  useEffect(() => {
    if (!token) {
      navigate('/forgotpassword');
    }
  }, [token, navigate]);

  const handleResetPassword = async (values) => {
    try {
      await resetPasswordWithToken(token, values.password);
      navigate('/signin'); 
    } catch (error) {
      setFormError(error.message);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
        confirm_password: "",
      },
      validationSchema: resetPasswordSchema.pick(['password', 'confirm_password']),
      onSubmit: (values) => {
        handleResetPassword(values);
      },
    });

  return (
    <>
    <div className="r-password">
        <div className="modal_">
        <img src={icon} alt="Logo" className="log" /> 
        <h2> Reset Password</h2>
      </div>
      <form className ="form_r" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="password">New Password:</label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="form-group">
      
        <label htmlFor ="confirm_password">Confirm New Password:</label>
          <input
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="but">
          <button className="login" type="submit">Reset</button>
        </div>
      {formError && <p className="form-error">{formError}</p>}
      {error && <p className="form-error">{error}</p>}
  </form>
  </div>
  </>
  );
};

export default ResetPassword;
