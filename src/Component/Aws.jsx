import React from "react";
import aws from "../images/aws.jpg";
import { NavLink } from "react-router-dom";
import aws1 from "../images/aws1.jpg";

export const Aws=()=>{
    return<>
       
       <container>
       <div className="pageTitle">
            <img className="img-fluid" src={aws1} alt="..." width="100%" height="250"  />
            <div><h1>Aws cloud</h1></div>
       </div>
       
        
       </container>
       <section id="header">
           <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                   
                   <h5 className="my-3"  style={{marginbottom:'20'}}>
                   We ensure organizations understand the potential of AWS cloud with no hurdles in onboarding
                   and migrating all their systems to it. Our teams are certified and experienced to take on 
                   any challenges and are hands on to the entire AWS services portfolio. We have successfully 
                   helped our clients to move their enterprise systems load to AWS Cloud including the entire 
                   mainframe and any additional components. Equipped with the latest tools of AWS technology,
                   the teams at PSI can bring about a revolution into the old and obsolete IT infrastructure 
                   for our clients, ensuring high performance every single time on the Cloud.</h5>
                   <div className="my-3">
                   <NavLink to="contact" className=" btn-get-started ">get started</NavLink>
                    
                   </div>
                   </div>
                   <div className="col-lg-6 order-1 order-lg-2 header-img ">
                   <img src={aws} className="img-fluid animated" alt="not shown" width="100%" height="500" />
                   
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
export default Aws;