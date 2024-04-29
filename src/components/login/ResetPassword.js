import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "./Schema"; 
import { useAuthContext } from "../context/AuthContext";
import './Form.css';

const ResetPassword = () => {
  const { resetPasswordWithToken, error } = useAuthContext();
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();
  const { token } = useParams(); 

  const handleResetPassword = async (values) => {
    try {
      await resetPasswordWithToken(token, values.password);
      navigate('/SignIn'); 
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
      validationSchema: userSchema.pick(['password', 'confirm_password']),
      onSubmit: (values) => {
        handleResetPassword(values);
      },
    });

  return (
    <div className="modal">
      <div className="modal_">
        <h2>Reset Password</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Password:</label>
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
          <label>Confirm New Password:</label>
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
          <button className="login" type="submit">Reset Password</button>
        </div>
      </form>
      {formError && <p className="form-error">{formError}</p>}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

export default ResetPassword;
