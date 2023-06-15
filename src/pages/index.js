

import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import About from "./About";
import ScrollToTop from "./ScrollToTop";
import Projects from "./Projects";
import Contacts from "./Contact";



export default function Home() {
  
  return (<div>
    <HomePage/>
    <About/>
     <Projects/>
     <Contacts/>
    
    <ScrollToTop />
  </div>);
}
