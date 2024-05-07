
import React from 'react';
import "./Page.css";

function Table({users}) {
  return (
    <table>
      <thead  style={{color:"red",fontSize:"16px"}}>
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Phone</th>
        
        </tr>
        
      </thead>
      <tbody style={{color:"green",fontSize:"14px"}}>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
           
        
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
