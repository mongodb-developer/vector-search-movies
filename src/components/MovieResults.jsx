import React from 'react'
import MovieCard from './MovieCard'

const MovieResults = ({movies}) => {
  if (movies.length > 0){
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
  } else return <div className='text-white'></div>

}

export default MovieResults