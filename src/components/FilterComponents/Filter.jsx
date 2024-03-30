import React from "react";
import Checkboxes from "./Checkboxes";
import Slider from "./Slider";


function Filters({ rating, setRating, genre, setGenre, setSubmitted }) {


  
  return (
    <div className="flex flex-col p-2  w-full rounded mx-auto  justify-center text-base ">
      

       <Checkboxes genre={genre} setGenre={setGenre}/>
       
       <Slider
         rating={rating} setRating={setRating} 
       />
  
     <div className="SEPARATOR bg-Purple  w-full mx-auto rounded-xl mt-8 h-1 "></div>
     <button onClick={() => setSubmitted(true)}
     className="mt-10 mx-auto w-32 text-lg py-4 text-white  bg-green-600 rounded">
       SEARCH
     </button>
   
        
     
    </div>
  );
}

export default Filters;