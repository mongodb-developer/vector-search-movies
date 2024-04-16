import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from "../images/Mlogo.svg";

const Resources = () => {

  const navigate = useNavigate();

  const navigateReference = () => {
   
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-BlackSmoke ">
      <div className='flex justify-center'> 
        <div className="w-48 ml-10 mt-10 ">
          <img
            src={Logo}
            alt="placeholder"
            className=" w-full mx-auto cursor-pointer hover:scale-110 transition-transform duration-500"
            onClick={navigateReference}

          />
        </div> </div></div>
  )
}

export default Resources