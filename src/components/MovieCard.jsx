import React from 'react'

const MovieCard = ({movie}) => {

    const releaseDate = sampleMovieData.released;
//   const releaseString = releaseDate?.slice(0, 10);
  const rating = movie.imdb.rating;
  const fullplot = movie.fullplot;
  let genreString = "";
  if (movie.genres) {
    genreString = movie.genres.join(", ");
  }

  return (
    <div className='bg-slate-800 p-8 rounded w-full h-96  overflow-auto border border-black cursor-pointer hover:scale-110 transition-transform duration-500'>
 
        <div className='text-SpringGreen text-2xl text-center mb-4'>{movie.title}</div>
       
        <img
            src={movie.poster}
            alt="movie-thumb"
            className=" w-full mx-auto "
          />
       <div className='text-white'> <h4>{fullplot}</h4>
       <div className="SEPARATOR bg-Purple  w-full mx-auto rounded-xl my-4 h-1 "></div>

{/* <ScoreBadge>Score: {score}</ScoreBadge> */}
<h3>Year: {sampleMovieData.year}</h3>
<h3>Rating: {rating}</h3>
<h4>RELEASE DATE: May 10, 1944</h4>
<h2 style={{ color: "#CCFF00" }}>{genreString}</h2></div>
       

    </div>
  )
}

export default MovieCard

const sampleMovieData = {
    "_id": {
      "$oid": "573a1390f29313caabcd413b"
    },
    "title": "The Arrival of a Train",
    "year":  "1896",
    "runtime": {
      "$numberInt": "1"
    },
    "released": {
      "$date": {
        "$numberLong": "-2335219200000"
      }
    },
    "poster": "http://ia.media-imdb.com/images/M/MV5BMjEyNDk5MDYzOV5BMl5BanBnXkFtZTgwNjIxMTEwMzE@._V1_SX300.jpg",
    "plot": "A group of people are standing in a straight line along the\n    platform of a railway station, waiting for a train, which is seen\n    coming at some distance. When the train stops at the platform, ...\",\n  \"fullplot\": \"A group of people are standing in a straight line along\n    the platform of a railway station, waiting for a train, which is\n    seen coming at some distance. When the train stops at the platform,\n    the line dissolves. The doors of the railway-cars open, and people\n    on the platform help passengers to get off.",
    "lastupdated": "2015-08-15 00:02:53.443000000",
    "type": "movie",
    "directors": [
      "Auguste Lumière",
      "Louis Lumière"
    ],
    "imdb": {
      "rating":  "7.3",
      "votes": {
        "$numberInt": "5043"
      },
      "id":  "12"
    },
  
 
    "genres": [
      "Documentary",
      "Short"
    ],
    "tomatoes": {
      "viewer": {
        "rating": {
          "$numberDouble": "3.7"
        },
        "numReviews": {
          "$numberInt": "59"
        }
      },
      "lastUpdated": {
        "$date": {
          "$numberLong": "1441993589000"
        }
      }
    },
    "num_mflix_comments": {
      "$numberInt": "1"
    }
  }