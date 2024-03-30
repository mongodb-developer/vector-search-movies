import React from 'react'
import Logo from "../images/Mlogo.svg";

// import components
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CodePanel from '../components/CodePanelComponents/CodePanel'
import Filter from '../components/FilterComponents/Filter'

const Home = () => {
  return (
    <div className="min-h-screen bg-BlackSmoke ">
      <div className='flex justify-center'> 
        <div className="w-48 ml-10 mt-10 ">
          <img
            src={Logo}
            alt="placeholder"
            className=" w-full mx-auto cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </div> 
        <div className='flex flex-col w-3/4'>
          <Header/>
          <div className=" w-5/6 mt-10 mx-auto"><SearchBar/></div>
        </div>
      </div>
     
     
     
      <div className='main-block flex mt-20 justify-center text-center px-10'>
        <div className="filter w-1/5 px-8 bg-transparent"><Filter /></div>
        <div className="movies w-3/5 px-8 bg-purple-600">MOVIES</div>
        <div className="aggregation w-1/5 px-8 bg-transparent"><CodePanel/></div>
      </div>
      
 
  </div>
  )
}

export default Home