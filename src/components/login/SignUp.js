import React ,{useState} from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "./Schema";
import { useAuthContext } from "../context/AuthContext";
import './Form.css';
import logo1 from "../../assets/image/logo.png";


const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const { signupWithEmailPassword } = useAuthContext();
 const navigate = useNavigate();
 const [ error , setError] = useState(null);

 const handleSignUp = async (values) => {
   try {
     await signupWithEmailPassword(values.email, values.password);
     navigate('/SignIn');
   } catch (error) {
     setError(error.message);
   }
 };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
       handleSignUp(values);
      },
    });




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
                  <div className="modal-buttons">
                    <div className="mail">  <Link to="/Gmail">
                      Want to signup using Gmail?
                    </Link>
                    </div>
                    <div className="but">
                    <button className="login" type="submit" >
                    SignUp
                    </button>
                    </div>
                  </div>
                </form>
              
                <p className="sign-up">
                  Already have an account? <Link to ="/SignIn">Sign In now</Link>
                </p>
              </div>
            
              </div>
           
       
    </>
  );
};


 export default SignUp;
 