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

const semanticSearchMovies = async (data, searhOption) => {
  console.log("posting to endpoint");

  // TO DO - pick endpoint based on search option - plot, poster, LLM
    const response = await axios.post(semanticMoviesSearchEndpoint, data);
    console.log("RESPONSE from POST: ", response)
    return response;
}

export default semanticSearchMovies;
// try {
//     let data = {
//       searchTerm: searchTerm,
//       start: dateStart,
//       end: dateEnd,
//       genre: genre,
//       rating: sliderValue,
//     };
//     console.log("GENRES: ", genre);

//     axios.post(GET_MOVIES_ENDPOINT, data).then((res) => {
//       console.log(res.data);
//       setMovies(res.data.movies);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   if (!submitted) return;
//   if (MOVIES_ENDPOINT_COMPOUND === "") {
//     console.log("");
//     setShowNeedEndpointMessage(true);
//     return;
//   }
//   setShowNeedEndpointMessage(false);

//   fetchMovies(searchTerm);

//   setSubmitted(false);

//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [submitted]);
