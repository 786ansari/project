import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router";
import { Home } from "./Home";
import {About} from "./About";
import Android from "../src/Component/Android";
import Iphone from "../src/Component/Iphone";
import Hybrid from "../src/Component/Hybrid";
import Aws from "../src/Component/Aws";
import Azure from "../src/Component/Azure";
import Php from "../src/Component/Php";
import Meanstack from "../src/Component/Meanstack";
import { Service } from "./Service";
import {Contact} from "./Contact";
import Navbar from "./Navbar";



const App=()=>{
  return(
  <>
  <Navbar />
  <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/About" component={About} />
     <Route exact path="/Android" component={Android} />
     <Route exact path="/Iphone" component={Iphone} />
     <Route exact path="/Hybrid" component={Hybrid}/>
     <Route exact path="/Php" component={Php}/>
     <Route exact path="/Meanstack" component={Meanstack}/>
     <Route exact path="/Contact" component={Contact}/>
     <Route exact path="/Aws" component={Aws}/>
     <Route exact path="/Azure" component={Azure}/>
     
     <Redirect to="/" />
 
  </Switch>
  </>
  );
};

export default App;