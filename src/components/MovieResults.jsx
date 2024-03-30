import React from 'react'
import MovieCard from './MovieCard'

const MovieResults = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-2 mt-10 md:grid-cols-4 md:gap-6"><MovieCard/><MovieCard/><MovieCard/><MovieCard/></div>
  )
}

export default MovieResults