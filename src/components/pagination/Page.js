import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table.js';
import Pagination from './Pagination.js';

 const Page = ()=>{
  const [users ,setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 

  

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      console.log(response);
      setUsers(response.data.users);
  
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const usersPerPage =5;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  
  const currentUsers = users && users.length > 0
    ? users.slice(indexOfFirstUser, indexOfLastUser)
    : []
  ;  
  return (
    <div>
      <h1 style={{textAlign:"center"}}>user Data</h1>
     
        <>
          <Table users={currentUsers} />
          <Pagination
            currentPage={currentPage}
            totalPosts={users.length}
            postsPerPage={usersPerPage}
            setCurrentPage={setCurrentPage}
          />
        </>
    
    </div>
  );
}

export default Page;
