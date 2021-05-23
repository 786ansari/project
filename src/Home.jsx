import React from "react";
import softweb from "../src/images/soft-web.jpg";
import cloud from "../src/images/cloud-home.jpg"
import data from "../src/images/data.jpg";
import smarket from "../src/images/s-market.jpg";
import cloudh from "../src/images/cloud-ser.jpg";
import seo from "../src/images/seo.jpg";
import development from "../src/images/development.jpg";
import client from "../src/images/client.jpg"

import { NavLink } from "react-router-dom";


export const Home =()=>{
    return(
        <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={softweb} className="img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h2 className="txt">Software and web development</h2>
        <p >helping you to develop responsive web and application</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={cloud} className="img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h2 className="txt">cloud computing</h2>
        <p className="txt">help you to build and better manage of cloud computing</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={data} className="img" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1 className="txt">data-analytics</h1>
        <p> help you to manage your data better.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       
       <div className="txt1" style={{margin:"100px"}}>

      <section id="header" className="">
           <div className="container-fluid ">
            <div className="row">
               
                <div className="row">
                   
                   <h1 className="txt2"><u>why choose us</u></h1>
                   <h5 className="txt2">We Co-Partner to build Solutions for the Future.<br/> 
                     our high-performance teams engage themselves in your project<br/>
                    to deliver the business goals on time and within financial resources.<br/> 
                   The emphasis to build relationships based on mutual trust and respect<br/>
                    helps achieve the desired results.
                   </h5>
                   <div className="my-3 txt2">
                   <NavLink   to="/contact" className=" btn-get-started ">get started</NavLink>
                    
                   </div>
                   </div>
                   </div>
                  </div>
                 </section>
                </div>

              
                <div className="row row-cols-1 row-cols-md-2 g-4 txt1" style={{marginTop:"50px",marginBottom:"50px"}}>
                   <div className="col">
                  <div className="card">
                   <img src={development} className="card-img-top" alt="..." width="300" height="300" />
                         <div className="card-body txt3">
                         <h5 className="card-title">development</h5>
                       <p className="card-text">our team help you to build web and software application</p> </div>
                     </div>
                   </div>
                       <div className="col">
                       <div className="card">
                       <img src={smarket} className="card-img-top" alt="..." width="300" height="300" />
                      <div className="card-body txt3">
                       <h5 className="card-title" >Marketing</h5>
                   <p className="card-text">our team help you to grow your bussiness</p>
                  </div>
                  </div>
                </div>
                   <div className="col">
                        <div className="card">
                      <img src={cloudh} className="card-img-top" alt="..." width="300" height="300" />
                        <div className="card-body txt3">
                             <h5 className="card-title">Cloud Services</h5>
                                       <p className="card-text">we helped several organizations develop a scalable cloud solution native to web and mobile.</p>
                                  </div>
                                  </div>
                                 </div>
                                  <div className="col">
                                     <div className="card">
                                         <img src={seo} className="card-img-top" alt="..." width="300" height="325"  />
                                    <div className="card-body txt3">
                                <h5 className="card-title">seo</h5>
                                  <p className="card-text">we are responsible for your applications seo.</p>
                             </div>
                         </div>
                         </div>
                     </div> 
                        

                     <section id="header" className="txt1" >
                   <div className="container-fluid ">
                     <div className="row">
               
                       <div className="row">
                   
                   <h1 className="txt2"><u>what we are doing</u></h1>
                   <h5 className="txt2">We are an organization driven by the employees and focus on<br/> 
                                        homegrown talent. A focus which is deeply rooted in our humble<br/>
                                       beginnings which shows in the steady growth and excellent customer retention rate.<br/>
                                       The culture and environment have a large influence on our employees as their<br/> 
                                        involvement and dedication is what has made us where we stand today.
                   </h5>
                   <div className="my-3 txt2">
                   
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
                   <NavLink   to="/contact" className=" btn-get-started " style={{color:"black"}}>Contact</NavLink>
                   
                   </div>
                   <div className="my-3 txt2">
                   <NavLink   to="/About" className=" btn-get-started" style={{color:"black"}} > About</NavLink>
                   
                    
                   </div>
                   <div className="my-3 txt2">
                   <NavLink   to="/Service" className=" btn-get-started " style={{color:"black"}}>Service</NavLink>
                    
              
                   </div>
                   </div>
                  </div>
                  </div>
                 </section>
                            

                    
             </>

    )

};

export default Home;

