import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [logiDetails, setlogiDetails] = useState({})
  // const {login} = useContext(AuthContext)

  const onchange = (e)=>{
    const {name, value} =e.target
    setlogiDetails({
      ...logiDetails,
      [name]:value,
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault(handleSubmit);
  }
  return (
    <div>
      Login
     <form onSubmit={handleSubmit}
     style ={{display: "flex", 
     flexDirection:"column", 
     margin:"auto",
      maxWidth:"200px", 
        gap:"10px"}}>

     <input placeholder="Enter email" name ="email" data-cy="login-email" type="email" onchange={onchange}/>
      <input placeholder="Enter Password" name="password" data-cy="login-password" type="password" onchange={onchange}/>
      <button data-cy="login-submit">Login</button>
     </form>
    </div>
  );
};

export default Login;
