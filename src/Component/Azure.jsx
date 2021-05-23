
import React from "react";
import azure from "../images/azure.jpg";
import { NavLink } from "react-router-dom";
import azure2 from "../images/azure2.jpg";

export const Azure=()=>{
    return<>
       
       <container>
       <div className="pageTitle">
            <img className="img-fluid" src={azure} alt="..." width="100%" height="250"  />
            <div><h1>Azure cloud services</h1></div>
       </div>
       
        
       </container>
       <section id="header">
           <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                   
                   <h5 className="my-3"  style={{marginbottom:'20'}}>
                   By drawing experience from several fruitful Azure Infrastructure deployments,
                   we simplify the process of moving and thriving in the cloud. We provide the 
                   support of automation frameworks to our cloud experts, alongside providing 
                   audited processes and the best cloud practices in the industry, which helps
                   the design solutions that maximize our client’s benefits. We build resilient
                   Azure infrastructure to rapidly deploy or migrate your infrastructure to 
                   Microsoft Azure with minimal downtime and risks involved.</h5>
                   <div className="my-3">
                   <NavLink to="contact" className=" btn-get-started ">get started</NavLink>
                    
                   </div>
                   </div>
                   <div className="col-lg-6 order-1 order-lg-2 header-img ">
                   <img src={azure2} className="img-fluid animated" alt="not shown" width="100%" height="500" />
                   
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
export default Azure;