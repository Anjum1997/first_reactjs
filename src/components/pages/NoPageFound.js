import React from 'react';
import ver from "../../assets/image/leber.png";

const NoPageFound = () => {
  return (
    <div>
     <div>
      <img src= {ver} className="ver" alt="verta" />
      </div> 
   <h1 style={{color:"red"}}>none of the page you are looking for is found</h1>
    </div>
  )
}

export default NoPageFound;
