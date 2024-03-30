import React, {useState} from 'react'

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";


const Checkboxes = ({genre, setGenre}) => {
   
    const [showCodeBlock, setShowCodeBlock]= useState(false)

    let genreObject = {
        text: {
          query: genre,
          path: "genres",
        },
      };

      let genreString = JSON.stringify(genreObject, null, 2);

      const [checkedState, setCheckedState] = useState(
        new Array(movieGenresArray.length).fill(false)
      );


      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
        let checkedGenres = [];
        for (let i = 0; i < movieGenresArray.length; i++) {
          if (updatedCheckedState[i] === true) {
            checkedGenres.push(movieGenresArray[i]);
          }
        }
        setGenre(checkedGenres);
      
      };
  return (
    <div className="checkbox-container">
      <div className="text-xl text-green-400">GENRES</div>
      <div className=' p-2 text-white'>
        <ul className="genres-list">
          {movieGenresArray.map((name, index) => {

            return (
              <div className="genre flex space-y-2 space-x-4 rounded text-lg" key={index}>
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                  style={{ opacity: 0, position: "absolute"  }}
                />
                <div onClick={() => handleOnChange(index)}>
                  {checkedState[index] ? <div>✅</div> : <div>☐</div>}
                </div>

                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
              </div>
            );
          })}
        </ul>
      </div>
      {showCodeBlock && (
           <> 
           <div className="SEPARATOR bg-Purple  w-full mx-4 rounded-2xl h-1 "></div>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {genreString}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  )
}

export default Checkboxes

const movieGenresArray = [
    "Drama",
    "Comedy",
    "Romance",
    "Sport",
    "Action",
    "Adventure",
    "Horror",
    "Family",
    "Mystery",
  ];

