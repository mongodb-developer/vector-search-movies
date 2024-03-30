import React, { useState } from "react";
import ReactSlider from "react-slider";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";




const Slider = () => {
 const [sliderValue, setSliderValue] = useState(3);
 const [showCodeBlock, setShowCodeBlock]= useState(false)
  
  let ratingObject = {
    range: {
      gte: sliderValue,
      lte: 10,
      path: "imdb.rating",
    },
  };

  let ratingString = JSON.stringify(ratingObject, null, 2);
  return (
    <div>
     
     <div className="w-full flex justify-center mb-6 ">
      <div className="w-full py-4  rounded-lg">
        <div className="text-center text-lg text-Sun">IMDB Rating:</div>
        <div className="my-10 ">
        <ReactSlider
        className="horizontal-slider w-full  mx-auto "
          value={sliderValue}
          max={10}
          min={0}
          onAfterChange={(value, index) => {
            setSliderValue(value);
          }}
          
          thumbClassName="example-thumb absolute -top-6 cursor-pointer flex black bg-Purple text-white p-4 rounded-full outline-none"
          trackClassName="example-track flex relative bg-SpringGreen items-center h-2  "
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
/>
         
        </div>{" "}
        
      </div>
    </div>
    
      {showCodeBlock && (
        <> 
            <div className="SEPARATOR bg-Purple  w-full mt-8 rounded-2xl h-1 "></div>
         
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {ratingString}
        </SyntaxHighlighter>
      </>
        
      )}
    </div>
  );
};

export default Slider;


