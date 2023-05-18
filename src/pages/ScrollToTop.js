import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [showbuttom,setShowButtom]=useState(false)
    
    const checkScroll= () => {
        if(  window.scrollY > window.innerHeight){
            setShowButtom(true);
        }else if (window.scrollY <= window.innerHeight){
            setShowButtom(false)
        }
    }
    useEffect(()=>{
   window.addEventListener("scroll",checkScroll);
   
   return ()=> window.removeEventListener("scroll",checkScroll);
    },[showbuttom, window.scrollY])

    const scrolltoTopFunction=()=>{
      
      window.scrollTo({top:0,behavior:"smooth"})
    }

  return (
  <div  onClick={()=>scrolltoTopFunction()} className={` animate-bounce  arrowToTop toTopBtn ${showbuttom ? "":"hideButtom"}`} > <FontAwesomeIcon icon={faCircleArrowUp} />
    
    </div>
    )
}

export default ScrollToTop