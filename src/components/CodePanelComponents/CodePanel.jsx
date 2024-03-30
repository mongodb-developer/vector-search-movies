import React, { useState } from "react";
import CodeReveal from "./CodeReveal";
import VectorSearchStage from "./VectorSearchStage";


const CodePanel = ({searchTerms, rating, genre}) => {
    const [showIndex, setShowIndex] = useState(false);

    const toggle = (showIndex) => {
      setShowIndex(!showIndex);
    };

  return (
    <div>
        <CodeReveal  open={showIndex} toggle={toggle}/>
        <div className="text-center bg-SlateBlue">
        <div className="p-4">
            <VectorSearchStage searchTerms={searchTerms} rating={rating} genre={genre}/>
        </div>
        </div>
    </div>
  )
}

export default CodePanel