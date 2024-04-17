import React from "react";
import { useNavigate } from "react-router"
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const { logout, user } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div>
        Hello Welcome <br />
      
        {user && user.email }
      </div>
      <div >
        <button variant="primary" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Home;
