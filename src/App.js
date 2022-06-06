import "./App.css";
import Navbar from "../src/components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import Login from "../src/pages/Login"

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
<Route path="" element={<Home/>}></Route>
<Route path="/login" element={<Login/>}>

</Route>
      </Routes> 
    </div>
  );
}

export default App;
