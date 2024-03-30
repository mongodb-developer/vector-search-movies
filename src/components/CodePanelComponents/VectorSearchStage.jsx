import React from "react";

import CodeSnippetCopy from "./CodeSnippetCopy";

const VectorSearchStage = ({searchTerms, price, bedrooms, people, region, types}) => {
 

//   let filterObject = {"price": {"$lte":price}};
//   if (bedrooms > 0 || region!=="Anywhere" || people > 0 || types.length >0){
//     filterObject = {'$and':[
//       {"price": {"$lte":price}}
//     ]}
//   };

//   if (region !== "Anywhere"){
//     const marketObject = { "region": region  };
//     filterObject.$and.push(marketObject)
//   }

//   if (people > 0){
//     const peopleObject =  {
//       'accommodates': {
//         '$gte': people
//       }
//     };
//     filterObject.$and.push(peopleObject)
//   }

//   if (bedrooms >0){
//     const bedroomsObject =  {
//       'bedrooms': {
//         '$gte': bedrooms
//       }
//     };
//     filterObject.$and.push(bedroomsObject)
//   }

//   if (types.length > 0){
//     const typesObject = {
//       "property_type": { $in : types}
//     };
//     filterObject.$and.push(typesObject)
//   }

  // let embeddings = embeddings for searchTerms"

    let vectorSearchAggregationObject = 
        {
          "$vectorSearch": {
            "index": "vector_index",
            "queryVector": "embeddings",
            "path": "fullplot_embedding",
            "filter":"filter",
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