

import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h2>Profile Page</h2>
      {user && (
        <div>
            {user.photoURL && (
            <img src={user.photoURL} alt="User Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          )}
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
