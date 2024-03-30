import React from 'react'
import MovieCard from './MovieCard'

const MovieResults = ({movies}) => {
  return (
    
    <div className="grid grid-cols-3 gap-6 p-2 mt-10 md:grid-cols-3 md:gap-6">
     
      {movies.map((movie,idx)=>(
        <MovieCard
          key={movie._id}
          movie={movie}
        />
      )

      )}


    </div>
  )
}

export default MovieResults