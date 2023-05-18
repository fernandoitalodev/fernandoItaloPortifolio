import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [showbuttom,setShowButtom]=useState(false)
    const isBrowser = () => typeof window !== 'undefined'; 
    
    useEffect(()=>{
const checkScroll= () => {
      if (isBrowser()) {
        if (window.scrollY > window.innerHeight) {
            setShowButtom(true);
        } else if (window.scrollY <= window.innerHeight) {
            setShowButtom(false)
        }
    }
    }

      if(isBrowser()){
        window.addEventListener("scroll",checkScroll);
        return ()=> window.removeEventListener("scroll",checkScroll);
      }
   
   
   
    },[showbuttom])

   
    const scrolltoTopFunction=()=>{
      if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    
    }

  return (
  <div  onClick={()=>scrolltoTopFunction()} className={` animate-bounce  arrowToTop toTopBtn ${showbuttom ? "":"hideButtom"}`} > <FontAwesomeIcon icon={faCircleArrowUp} />
    
    </div>
    )
}

export default ScrollToTop