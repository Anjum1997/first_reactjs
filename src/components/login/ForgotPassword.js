import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "./Schema"; 
import { useAuthContext } from "../context/AuthContext";
import './Form.css';

const ForgotPassword = () => {
  const { sendPasswordResetEmail, error } = useAuthContext();
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const handleSendPasswordResetEmail = async (values) => {
    try {
      await sendPasswordResetEmail(values.email);
      navigate('/reset-password-sent');
    } catch (error) {
      setFormError(error.message);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: userSchema.pick(['email']),
      onSubmit: (values) => {
        handleSendPasswordResetEmail(values);
      },
    });

  return (
    <div className="modal">
      <div className="modal_">
        <h2>Forgot Password</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="but">
          <button className="login" type="submit"> Reset Email</button>
        </div>
      </form>
      {formError && <p className="form-error">{formError}</p>}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
