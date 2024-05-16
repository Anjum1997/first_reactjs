import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import Page from "../pagination/Page.js";
import Navbar from '../navbar/Navbar.js';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <>
    <Navbar />
    <div>
    <div  style ={{width:"300px",height:"250px" ,margin:"auto",paddingTop:"30px"}} >
      <h2>Profile Page</h2>
      {user && (
        <div style ={{width:"280px",height:"200px",textAlign:"center",color:"green",fontSize:"18px"}}>
          {user.photoURL ? (
            <img src={user.photoURL} alt="User Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          ) : (
            <div>No profile photo available</div>
          )}
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
    <div>
    <Page />
    </div>
    </div>
</>
  );
};

export default Home;
