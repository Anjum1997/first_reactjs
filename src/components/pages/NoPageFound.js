
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NoPageFound() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


    return (
      
      <div style={{padding:"20px", width:"700px",margin:'auto',height:"250px"}}>
        <h2 style={{display:"flex",alignItems:"center",justifyContent:"center",width:"200px",height:"30px"}}>List Form:</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}>{`ID: ${item.id}, Name: ${item.name}   Username:${item.username},  Email:${item.email} `}</li>
          ))}
        </ul>
      </div>
    );
};


export default NoPageFound;
