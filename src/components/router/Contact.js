
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { contactSchema } from "../login/Schema";
import "../login/Form.css";
import Navbar from "../navbar/Navbar";





const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  message: '',
};
const ContactPage = () => {
    const [formError, setFormError] = useState(null);
    const navigate = useNavigate();
  
  
    const handleSend = async () => {
      try {
        navigate('/');
      } catch (error) {
        setFormError(error.message);
      
      }
    };
  
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
      useFormik({
        
        initialValues,
        validationSchema:contactSchema ,
        onSubmit: (values) => {
          handleSend(values);
        },
      });
  

  return (
    <>
    <Navbar />
    <div className="section-contact">
    <div  className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="firstName"
                autoComplete="off"
                name="firstName"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName ? (
                <p className="form-error">{errors.firstName}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="lastName"
                autoComplete="off"
                name="lastName"
                id="lastName"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                <p className="form-error">{errors.lastName}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
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
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                autoComplete="off"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? (
                <p className="form-error">{errors.phone}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="address"
                autoComplete="off"
                name="address"
                id="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address && touched.address ? (
                <p className="form-error">{errors.address}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                autoComplete="off"
                name="message"
                id="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message ? (
                <p className="form-error">{errors.message}</p>
              ) : null}
            </div>
            <div className="but">
            <button type="submit" className="login">send</button>
            </div>
            {formError && <p className="form-error">{formError}</p>}
       
          </form>
    </div>
    </div>
    </>
  );
};

export default ContactPage;

