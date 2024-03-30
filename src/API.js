import axios from 'axios';

const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

const Headers = {

};

const Params = {};


const semanticMoviesSearchEndpoint = "https://us-east-1.aws.data.mongodb-api.com/app/movies-wseyb/endpoint/getSemanticSearchPost" ;
const imageMoviesSearchEndpoint = "https://us-east-1.aws.data.mongodb-api.com/app/movies-wseyb/endpoint/getImageVectorSearch";

const semanticSearchMovies = async (data, searchOption) => {
  console.log("posting to endpoint");
  console.log("searchOption: ", searchOption);

  let MOVIES_ENDPOINT = semanticMoviesSearchEndpoint

  // TO DO - pick endpoint based on search option - plot, poster, LLM
  if (searchOption === 'poster'){
    console.log("searching for posters!")
    MOVIES_ENDPOINT = imageMoviesSearchEndpoint;

  } else if (searchOption === 'LLM'){
    console.log("calling ChatGPT!")
  }
  
    const response = await axios.post(MOVIES_ENDPOINT, data);
    console.log("RESPONSE from POST: ", response)
    return response;
}

export default semanticSearchMovies;


