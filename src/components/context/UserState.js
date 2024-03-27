import  { useState } from "react";
import UserContext from "./UserContext";
import {FormContext} from "./UserContext"

const UserState = (props) => {
const s ={
    name:"Anjum Mishra",
    address:"sector 70, mattaur,mohali",
    mobile:"7082098254",
}

const [state,setState] =useState(s);

 const update = () =>{
setTimeout(() =>{
    setState({
    name:"vinod Mishra",
    address:"saisons paper mill,pehowa",
    mobile:"9779200883",
    })
},
[8000])
 };

  const[isLoggedIn,setIsLoggedIn] = useState(false);
    
  const onLogin =()=>{
     setIsLoggedIn(true);
  };
 
  const onLogout =()=>{
     setIsLoggedIn(false);
  };
 

  return (
    <UserContext.Provider  value ={{state ,update}}>
        <FormContext.Provider value={{isLoggedIn,onLogin,onLogout}}>
 
        {props.children}
        
 </FormContext.Provider>
      
    </UserContext.Provider>
  
  )
  
}

export default UserState;
