import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table.js';
import Pagination from './Pagination.js';

 const Page = ()=>{
  const [posts ,setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 

  

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
  
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const postsPerPage =10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  const currentPosts = posts && posts.length > 0
    ? posts.slice(indexOfFirstPost, indexOfLastPost)
    : []
  ;  
  return (
    <div>
      <h1 style={{textAlign:"center"}}>post Data</h1>
     
        <>
          <Table posts={currentPosts} />
          <Pagination
            currentPage={currentPage}
            totalPosts={posts.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </>
    
    </div>
  );
}

export default Page;
