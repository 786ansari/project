import React from "react";

import hybrid2 from "../images/hybrid2.jpg";
import { NavLink } from "react-router-dom";
import iphone1 from "../images/iphone1.jpg";

export const Hybrid=()=>{
    return<>
       
       <container>
       <div className="pageTitle">
            <img className="img-fluid" src={hybrid2} alt="..." width="100%" height="250"  />
            <div><h1>Hybrid App</h1></div>
       </div>
       
        
       </container>
       <section id="header">
           <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                   
                   <h5 className="my-3"  style={{marginbottom:'20'}}>
                   Dev Technosys is a Web and App development company that offers breakthrough development
                   solutions for modern technology needs of start-ups and SME’s. We have a vast pool of talent
                   resource which help us in catering you advance technology tools that help you strengthen your 
                   technical infrastructure. Our expertise in Hybrid Mobile App development is wide; we have extensive
                   knowledge and years of experience allowing us in reaching core of your technical requirements 
                   and fix them with modern tools. Here we manufacture the best in class cross platform application 
                   development that function seamlessly on the top platforms such as android, iOS. Our Hybrid app 
                   development efficiently delivers apps that are visually stunning, feature-rich and robust on backend and frontend.</h5>
                   <div className="my-3">
                   <NavLink to="contact" className=" btn-get-started ">get started</NavLink>
                    
                   </div>
                   </div>
                   <div className="col-lg-6 order-1 order-lg-2 header-img ">
                   <img src={iphone1} className="img-fluid animated" alt="not shown" width="100%" height="500" />
                   
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
export default Hybrid;