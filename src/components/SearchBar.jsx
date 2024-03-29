import React, {useState} from 'react'
import Selector from './Selector';
// import makeAnimated from "react-select/animated";

const searchTypeOptions = [
    { id: 1, name: 'plot', unavailable: true },
    { id: 2, name: 'poster', unavailable: false },
    { id: 3, name: 'LLM', unavailable: false },
  
  ];

const SearchBar = () => {

  return (
    <div className="flex justify-between text-black  ">
    <form  className="w-full flex relative">
      <span className="absolute inset-y-0 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
           stroke="white"
          className="w-6 h-6 ml-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <input
        className="w-3/4 border rounded-lg  py-4 pl-16 focus:border-green-500 focus:outline-none focus:shadow-outline bg-transparent"
        type="text"
        placeholder="Search movies ..."
        // onChange={(e) => setSearchTerms(e.target.value)}
        // value={searchTerms}
      />
      <div className="flex flex-col w-96 mx-8 text-lg bg-transparent">
        <div className="relative mx-auto text-SpringGreen">Vector Search for</div>
        <Selector/>

       
      </div>
      <button className=" w-28  text-white  bg-green-600 rounded">
        SEARCH
      </button>
    </form>
   
    
  </div>
  )
}

export default SearchBar