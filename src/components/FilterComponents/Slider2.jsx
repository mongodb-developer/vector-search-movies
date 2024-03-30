import React, { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";


const Slider = () => {
 const [sliderValue, setSliderValue] = useState(3);
 const [showCodeBlock, setShowCodeBlock]= useState(true)
  
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
     
        <h2 className="text-xl text-Sun mb-4">IMDB Rating: {sliderValue}</h2>
        <input
          className=""
          type="range"
          min={0}
          max={10}
          value={sliderValue}
          onChange={(e) => {
            setSliderValue(e.target.value);
          }}
        />
    
      {showCodeBlock && (
        <> 
            <div className="SEPARATOR bg-Purple  w-full mx-4 rounded-2xl h-1 "></div>
         
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {ratingString}
        </SyntaxHighlighter>
      </>
        
      )}
    </div>
  );
};

export default Slider;


