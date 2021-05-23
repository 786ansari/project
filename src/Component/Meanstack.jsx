import React from "react";
import hybrid2 from "../images/hybrid2.jpg";
import { NavLink } from "react-router-dom";
import android2 from "../images/android2.jpg";

export const Meanstack=()=>{
    return<>
       
       <container>
       <div className="pageTitle">
            <img className="img-fluid" src={hybrid2} alt="..." width="100%" height="250"  />
            <div><h1>Meanstack Development</h1></div>
       </div>
       
        
       </container>
       <section id="header">
           <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                   
                   <h5 className="my-3"  style={{marginbottom:'20'}}>
                   DevTechnosys is flag-bearer of websites that are highly functional from front-end as well 
                   as back-end. As a best web development company Our expertise in development of Hybrid App’s
                   runs deep. Since our inception, we have put efforts in deeply studying and rectifying the 
                   modern technical problems of the industries. We formulated methodical strategies and solutions
                   to best meet your enterprise needs that attract wider business profits.</h5>
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
export default Meanstack;