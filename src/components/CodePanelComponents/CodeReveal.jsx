import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import CodeSnippetCopy from "./CodeSnippetCopy";

const CodeReveal = ({
  open,
  toggle,
  title,
  negTitle,
  children,
  copyTextObject,
  lesson,
}) => {
  let codeStyle = `bg-purple-800 w-full text-white py-2 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-12 rounded `;

  return (
    <div className="Wrapper py-2 ">
      <div className="flex justify-center">
        <div className={`${codeStyle}`} onClick={() => toggle(open)}>
          {open ? <div>Close Index Definition</div> : <div>Index Definition</div>}
          <div className="text-3xl text-white ml-4">
            {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </div>
        </div>
      </div>
        <Collapse isOpened={open}>
          <CodeSnippetCopy copyTextObject={vectorIndex}  />
        </Collapse>
      
    </div>
  );
};

export default CodeReveal;

const vectorIndex = {
    "fields": [
      {
        "numDimensions": 1536,
        "path": "description_embedding",
        "similarity": "cosine",
        "type": "vector"
      },
      {
        "path": "address.market",
        "type": "filter"
      },
      {
        "path": "accommodates",
        "type": "filter"
      },
      {
        "path": "bedrooms",
        "type": "filter"
      }
    ]
  };