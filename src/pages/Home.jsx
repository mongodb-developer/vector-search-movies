import React from 'react'

// import components
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div className="min-h-screen bg-BlackSmoke">
      <Header/>
      <div className="w-3/4 mt-10 mx-auto"><SearchBar/></div>
      
 
  </div>
  )
}

export default Home