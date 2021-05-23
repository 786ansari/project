import React from "react";
import about from "../src/images/about.jpg";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import about1 from "../src/images/about1.jpg";
import { NavLink } from "react-router-dom";

import Contact from "./Contact";




export const About =()=>{
    return(
        <>
       <container>
       <div className="pageTitle">
            <img className="img-fluid" src={about} alt="..." width="100%" height="250"  />
            <div><h1>About Us</h1></div>
       </div>
       
        
       </container>
       <section id="header">
           <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                   
                   <h5 className="my-3"  style={{marginbottom:'20'}}>
                    Founded in 2000, intelliware operates today
                    as a global provider of software solutions 
                    for various segments including OPD, BPM,ADM,
                    ISV, Web & Multimedia, Testing, and Consulting
                    Services. From our offices in the US, Canada, 
                    and Germany, and a development center in India,
                    we serve an extremely diverse base of industry 
                    and technology clients,from startups to Fortune 
                    500 corporations.</h5>
                   <div className="my-3">
                   <NavLink to="contact" className=" btn-get-started ">get started</NavLink>
                    
                   </div>
                   </div>
                   <div className="col-lg-6 order-1 order-lg-2 header-img ">
                   <img src={about1} className="img-fluid animated" alt="not shown" width="100%" height="500" />
                   
                   </div>
                   </div>
                </div>
                </div>
                </div>
           </section>
                 
                
           <section id="header" className="txt1 clr">
                   <div className="container-fluid ">
                     <div className="row">
               
                       <div className="row">
                   
                  
                   
                   <div className="my-3 txt2">
                   <NavLink   to="/Home" className=" btn-get-started " style={{color:"black"}}>home</NavLink>
                    
                   </div>
                   <div className="my-3 txt2">
                   <NavLink   to="/Service" className=" btn-get-started" style={{color:"black"}} > Services</NavLink>
                    
                   </div>
                
                   <div className="my-3 txt2">
                   <NavLink   to="/Contact" className=" btn-get-started" style={{color:"black"}} > contact</NavLink>
                    
                   </div>
                   </div>
                   </div>
                  </div>
                 </section>



      </>
    )

};

export default About;