
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Detail() {
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
      <div style={{padding:"20px",border:"2px solid red", width:"700px",margin:'auto',height:"340px"}}>
        <h2 style={{display:"flex",alignItems:"center",justifyContent:"center",width:"200px",height:"25px"}}>Grid Form:</h2>
        <table style={{ width:"600px",margin:'auto',height:"280px"}}>
          <thead >
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr  key={item.id}>
                <td style={{border:"2px solid green", paddingLeft:"6px"}} >{item.id}</td>
                <td style={{border:"2px solid green", paddingLeft:"6px"}}>{item.name}</td>
                <td style={{border:"2px solid green" ,paddingLeft:"6px"}}>{item.username}</td>
                <td style={{border:"2px solid green", paddingLeft:"6px"}}>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };



export default Detail;


// 
// const [data, setData] = useState([]);
// 
//   useEffect(() => {
//     fetch();
//   }, []);
// 
//   const fetch = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
// 
// 
//     return (
//       
//       <div style={{padding:"20px", width:"700px",margin:'auto',height:"250px"}}>
//         <h2 style={{display:"flex",alignItems:"center",justifyContent:"center",width:"200px",height:"30px"}}>List Form:</h2>
//         <ul>
//           {data.map(item => (
//             <li key={item.id}>{`ID: ${item.id}, Name: ${item.name}   Username:${item.username},  Email:${item.email} `}</li>
//           ))}
//         </ul>
//       </div>
//     );
// };
