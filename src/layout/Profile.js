import React, { useContext } from 'react'
import {FormContext} from "../components/context/UserContext";
import "./profile.css";

const Profile = () => {

    const{ isLoggedIn, onLogin , onLogout }= useContext(FormContext);
  return (
    <div>
      <h3> user profile</h3>
      {isLoggedIn ? (

      <div>
      <p>welcome user!</p> 
      <button onClick={onLogout}>logout</button>
       </div>
        ):(
        <div>
      <p>welcome!</p> 
      <button onClick={onLogin}>login</button>
      </div>
       )};
   </div>
  );
};

export default Profile;



// 
// //import React ,{useContext,useEffect} from 'react'
// import "./header.css";
// import UserContext from '../context/UserContext';

// const Header = () => {
//  
//   const a = useContext(UserContext);
// 
//     useEffect(() =>{
//    a.update()
//     } ,[])
// 
//  return (
//    <>
//    <h1 style={{color:"green"}}>
//    MY NAME IS {a.state.name} <br/> address is {a.state.address}<br/> mobile no is {a.state.mobile}.
//    </h1>