
import React from 'react';
import "./Page.css";

function Table({posts}) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
