import React ,{useState}from "react";
import {useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "./Schema"; 
import { useAuthContext } from "../context/AuthContext";
import './Form.css';
import icon from "../../assets/image/form-icon.jpg";
import { v4 as uuidv4 } from 'uuid'; 



const ForgotPassword = () => {
  const { sendPasswordResetEmail, error } = useAuthContext();
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const handleSendPasswordResetEmail = async (values) => {
    try { 
       const token = uuidv4(); 
    await sendPasswordResetEmail(values.email, token);
    navigate(`/resetpassword/${token}`);
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
    <>
<div className="r-password">
    <div className="modal_login">
    <img src={icon} alt="Logo" className="log" /> 
    <h2>Forgot Password</h2>
  </div>
      <form className="form_forget" onSubmit={handleSubmit}>
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
          <button className="login" type="submit"> change</button>
        </div>
      {formError && <p className="form-error">{formError}</p>}
      {error && <p className="form-error">{error}</p>}
    </form>
    </div>
    </>
  );
};

export default ForgotPassword;
