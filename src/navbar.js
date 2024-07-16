import { Link } from "react-router-dom"
import React from "react";
function Navbar() {


    return (
  <div className="navbar">
     <nav>
    <div className="nav-wrapper">
      <Link to={"login"} className="btn" id="btn" >Login</Link>
      <Link href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">=</i></Link>
      <ul className="right hide-on-med-and-down">
      <li className="tab "><Link to={"/"}>home</Link></li>
   <li className="tab"><Link to="/about">About Us</Link></li>
   <li className="tab"><Link to={"service"}>service</Link></li>
   <li className="tab"> <Link to={"help"}>help</Link></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
  <li className="tab "><Link to={"/"}>home</Link></li>
   <li className="tab"><Link to="/about">About Us</Link></li>
   <li className="tab"><Link to={"service"}>service</Link></li>
   <li className="tab"> <Link to={"help"}>help</Link></li>
  </ul>
          
  </div>

            
        );
}
export default Navbar;