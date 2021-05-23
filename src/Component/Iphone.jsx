import React from "react";
import iphone from "../images/iphone.jpg";
import { NavLink } from "react-router-dom";
import iphone1 from "../images/iphone1.jpg";

export const Iphone=()=>{ 
  return<>
    <container>
    <div className="pageTitle">
      <img className="img-fluid" src={iphone} alt="..." width="100%" height="250"  />
        <div><h1>Iphone App</h1></div>
    </div>
    </container>
    <section id="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h5 className="my-3"  style={{marginbottom:'20'}}>
                   The rise in the number of iPhone users, app development market fast shaped. In large numbers
                   enterprises and Business are reaching out to lavish highly scalable custom ios app development
                   services that helps them in tapping the iPhone user market.Dev Technosys is a visionary team
                   of dedicated and skilful iPhone developer that have deep enrooted knowledge and technical 
                   approach of iPhone App development. At Dev Technosys you will find high-end services such as 
                   mobile app development, customized to meet your enterprise B2B and B2C needs, iPhone Game development,
                   wearable app development, IoT development, that helps you standout in your business regime and capture
                   wider audience for business benefits.
                </h5>
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
export default Iphone;