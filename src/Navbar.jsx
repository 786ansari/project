import React from "react";

import { NavLink } from "react-router-dom";



const Navbar =()=>{
    return(
        <>
         
            <div className="container-fluid">
            <div className="row bg-dark">
                <div className="col-12 mn-auto ">
           <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to="/">intelliware</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#"  data-bs-toggle="dropdown" >
            Services
          </a>
          <ul className="dropdown-menu" style={{color:"white"}}   aria-labelledby="navbarDropdown">
            <li className="hover-me"><NavLink className="dropdown-item" to="/">software development</NavLink>
              <div className="sub-menu-2" >
                <ul>
                  <li><NavLink  to="/Android"  className="li-clr">Android App Development</NavLink></li>
                  <li><NavLink  to="/Iphone"  className="li-clr">Iphone app Development</NavLink></li>
                  <li><NavLink  to="/Hybrid"  className="li-clr">Hybrid App Development</NavLink></li>
                </ul>
              </div>
                
             
                </li>
             <li className="hover-me"><NavLink className="dropdown-item" to="/">fullstack development</NavLink>
             <div className="sub-menu-2">
                <ul >
                  <li ><NavLink to="/Php"  className="li-clr"> Php development</NavLink></li>
                  <li ><NavLink to="/Meanstack"  className="li-clr"> Meanstack development</NavLink></li>
                 
                </ul>
              </div>
             
             </li>
             <li className="hover-me"><NavLink className="dropdown-item" to="/">cloud services</NavLink>
             <div className="sub-menu-2">
                <ul >
                  <li ><NavLink to="/Aws"  className="li-clr"> Aws cloud Service</NavLink></li>
                  <li ><NavLink to="/Azure"  className="li-clr"> Azure cloud Service</NavLink></li>
                  
                </ul>
              </div>             
             </li>
             
          </ul>   
       
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
            </div>
            </div>

        </>
    );
};

export default Navbar; 