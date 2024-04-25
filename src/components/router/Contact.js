import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Contact.css";

const ContactPage = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactPage;

