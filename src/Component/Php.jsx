import React from "react";
import hybrid2 from "../images/hybrid2.jpg";
import { NavLink } from "react-router-dom";
import android2 from "../images/android2.jpg";

export const Php=()=>{
    return<>
       
       <container>
       <div className="pageTitle">
            <img className="img-fluid" src={hybrid2} alt="..." width="100%" height="250"  />
            <div><h1>Php development</h1></div>
       </div>
       
        
       </container>
       <section id="header">
           <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                   
                   <h5 className="my-3"  style={{marginbottom:'20'}}>
                   Dev Technosys is an ISO 9001:2008 Certified PHP web development company USA known for its PHP
                   Development Services for industry-specific Websites and Web Portals. At Dev Technosys we embellish
                   new ways to bridge the digital divide between your enterprise and users. We build technical master
                   pieces that are attractive, feature-rich and user-friendly and highly robust at backend. At Dev 
                   Technosys we are a team of expert PHP developers that deliver remarkable PHP web development 
                   services ensuing exceptional User Experience and largely open global conversion possibilities.
                   Till date we have delivered 950+ successful projects with 450+ satisfied customers from varied
                   industries and of diverse enterprise needs. Our high quality Custom PHP Development Services 
                   has global footprints known for retaining desired results. Over the years we have helped SME’s
                   and Start-ups in launch of their products and build a global presence.</h5>
                   <div className="my-3">
                   <NavLink to="contact" className=" btn-get-started ">get started</NavLink>
                    
                   </div>
                   </div>
                   <div className="col-lg-6 order-1 order-lg-2 header-img ">
                   <img src={android2} className="img-fluid animated" alt="not shown" width="100%" height="500" />
                   
                   </div>
                   </div>
                </div>
                </div>
                </div>
           </section>

           <section id="header" className="txt1 clr" style={{marginTop:"10px"}}>
                   <div className="container-fluid ">
                     <div className="row">
               
                       <div className="row">
                   
                  
                   
                   <div className="my-3 txt2">
                   <NavLink   to="/Home" className=" btn-get-started " style={{color:"black"}}>home</NavLink>
                    
                   </div>
                   <div className="my-3 txt2">
                   <NavLink   to="/About" className=" btn-get-started" style={{color:"black"}} > About</NavLink>
                    
                   </div>
                
                   <div className="my-3 txt2">
                   <NavLink   to="/Contact" className=" btn-get-started" style={{color:"black"}} > contact</NavLink>
                    
                   </div>
                   </div>
                   </div>
                  </div>
                 </section>



    </>
}
export default Php;