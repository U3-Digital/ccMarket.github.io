import React, { useEffect } from 'react';
import { ChevronsUp } from 'react-feather';
const Taptop = (props) => {

    const executeScroll = () => {
        window.scrollTo({top:0,left:0,behavior: 'smooth'})
    }

    const handleScroll = () => {
        if(window.scrollY > 600){
            document.querySelector(".tap-top").classList.add("d-block")
        }else{
            document.querySelector(".tap-top").classList.remove("d-block")
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll)
          }
        
    },[])

    return (
        <div className="tap-top"><ChevronsUp onClick={() => executeScroll()}/></div>
    )
}

export default Taptop;