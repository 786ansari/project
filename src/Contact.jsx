import React, { useState } from "react";
import ReactDom from "react-dom";
import contact from "../src/images/cnct.jpg"
import "./index.css";

export const Contact=()=>{

    const[info, setInfo] =useState({
        fullname:'',
        phone:'',
        email:"",
        message:""
    });
    const inputEvent=(event)=>{
       const {name, value} =event.target;

       setInfo((preVal)=>{
           return {
           ...preVal,
           [name]:value,
           }
   })
}
    const Done=(event)=>{
   
     alert("form Submitted");
    }
    const formSubmit=(e)=>{
     e.preventDefault();
    }

    return(
        <>
       <container>
       <div className="pageTitle">
            <img className="img-fluid" src={contact} alt="..." width="100%" height="250"  />
            <div><h1>Contact Us</h1></div>
       </div>
       
        
       </container>
            



            
         <div className="my-5">
             <h1 className="text-center"><u>contact us</u></h1>
         </div>
         <div className="container contact_div" >
             <div className="row" >
                 <div className="col-md-6 col-10 mx-auto" >
                     <form onSubmit={formSubmit}>
                     <div className="mb-3">
                     <label for="exampleFormControlInput1" className="form-label">Fullname</label>
                     <input type="text" className="form-control" id="exampleFormControlInput1" 
                     name="FullName"
                     value={info.fullName}
                     onChange={inputEvent}
                     placeholder="Enter Your Full Name" />
                      </div>
                      <div className="mb-3">
                     <label for="exampleFormControlInput1" className="form-label">Phone</label>
                     <input type="number" className="form-control" id="exampleFormControlInput1" 
                     name="phone"
                     value={info.phone}
                     onChange={inputEvent}
                     placeholder="Mobile Number" />
                      </div>
                      <div className="mb-3">
                     <label for="exampleFormControlInput1" className="form-label">email</label>
                     <input type="email" className="form-control" id="exampleFormControlInput1" 
                     name="email"
                     value={info.email}
                     onChange={inputEvent}
                     placeholder="name@example.com" />
                      </div>
                      
                     <div className="mb-3">
                     <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                      name="message"  value={info.message} onChange={inputEvent} ></textarea>
                     </div>
                     <div className="col-12">
                         <button className="btn btn-outline-primary" type="submit" onClick={Done}>submit form</button>
                     </div>
                     </form>
                 </div>
             </div>
         </div>











 
     
        </>
    )
}

export default Contact;