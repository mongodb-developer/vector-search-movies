import React from "react";

import CodeSnippetCopy from "./CodeSnippetCopy";

const VectorSearchStage = ({searchTerms, rating, genre}) => {
 
  let filterObject = {
    '$and': []
  };

  if (rating >0){
    const ratingObject =  {
      'imdb.rating': {
        '$gte': rating
      }
    };
    filterObject.$and.push(ratingObject)
  }

  if (genre.length > 0){
    const genresObject = {
      "genres": { $in : genre}
    };
    filterObject.$and.push(genresObject)
  }

  // let embeddings = embeddings for searchTerms"

    let vectorSearchAggregationObject = 
        {
          "$vectorSearch": {
            "index": "vector_index",
            "queryVector": "embeddings",
            "path": "fullplot_embedding",
            "filter":filterObject,
            "numCandidates":100,
            "limit": 12
          }
        };
    
  return (
    <div className="rounded">
      <div className="bg-Sun  text-black  text-xl p-2 rounded">Code for $vectorSearch Stage</div>
      <div className="text-white mt-4">Using OpenAI's <span className="text-SpringGreen">text-embedding-ada-002</span> model</div>
      <div className="text-white py-2">const <span className="text-Sun">embeddings</span> = getEmbeddings<span className="text-fuchsia-600">(</span><span className="text-Sun">{searchTerms}</span><span className="text-fuchsia-600">)</span></div>
      <div className="text-sm relative w-full">
        <CodeSnippetCopy copyTextObject={vectorSearchAggregationObject} />
       
    </div>
    </div>
  
  )
}

export default VectorSearchStage