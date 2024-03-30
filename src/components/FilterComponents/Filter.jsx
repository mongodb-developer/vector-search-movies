import React from "react";
import Checkboxes from "./Checkboxes";
import Slider from "./Slider";

// import { FaRegUser } from "react-icons/fa6";
// import { BiBed } from "react-icons/bi";


function Filters({ types, setTypes, price, setPrice, setBedrooms, setPeople, region, setRegion }) {
  return (
    <div className="flex flex-col p-2  w-full rounded mx-auto  justify-center text-base ">
        <Checkboxes/>
       
        <Slider
          category="Price"
          field="Price"
          value={price}
          setValue={setPrice}
        />
   
      <div className="SEPARATOR bg-Purple  w-full mx-4 rounded-xl mt-8 h-1 "></div>
      <button className="mt-10 mx-auto w-32 text-lg py-4 text-white  bg-green-600 rounded">
        SEARCH
      </button>
     
    </div>
  );
}

export default Filters;