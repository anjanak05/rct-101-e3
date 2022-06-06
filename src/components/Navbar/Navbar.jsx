import React, {useContext} from "react";
import { Link,  useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a href="/"/>;

const Navbar = () => {
  // const {isAuth} = useContext(AuthContext)
const navigate = useNavigate();
  const handlelogin = ()=>{
    navigate("/login")
  }
  return (
    <div data-cy="navbar" style={{padding:"10px", display:"flex", gap:"10px"}}>
      <Link data-cy="navbar-home-link" to="">Home</Link>
      <span data-cy="navbar-cart-items-count">count</span>
      <button data-cy="navbar-login-logout-button" onClick={handlelogin}>Login</button>
    </div>
  );
};

export default Navbar;
