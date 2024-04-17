

import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h2>Profile Page</h2>
      {user && (
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>

        </div>
      )}
    </div>
  );
};

export default Home;
