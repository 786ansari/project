import React from "react";
import android from "../images/android1.jpg"
import { NavLink } from "react-router-dom";
import android2 from "../images/android2.jpg"

export const Android=()=>{
    return<>
        <container>
       <div className="pageTitle">
            <img className="img-fluid" src={android} alt="..." width="100%" height="250"  />
            <div><h1>Android App</h1></div>
       </div>
       
        
       </container>
       <section id="header">
           <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                   
                   <h5 className="my-3"  style={{marginbottom:'20'}}>
                   Best Android Development Company Intelliware is an expert Mobile app development company
                   that provides end-to-end solutions to all your android app development requirements. We are
                   one of the leading renderers of android app development services that giveaway world-class 
                   results and helps in increasing revenue and profits for your enterprise. Our top-end services
                   are best to meet business technical requirements of start-up, SME’s etc. At Dev Technosys you 
                   will we go as far to embark new technology road including the AR/VR, IoT, Blockchain.</h5>
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
    
}

export default Android;