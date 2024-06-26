import React, {useState} from 'react'
import Selector from './Selector';
// import makeAnimated from "react-select/animated";

const searchTypeOptions = [
    { id: 1, name: 'plot' },
    { id: 2, name: 'poster' },
    { id: 3, name: 'LLM' },
  
  ];

const SearchBar = ({ searchOption, setSearchOption, setSubmitted, searchTerms, setSearchTerms}) => {
    // const [terms, setTerms] = useState('');

   
   
  return (
    <div className="flex justify-between text-black mt-8 w-full ">
    <form  onSubmit={(e)=>{
      e.preventDefault();
    
      setSubmitted(true)
    }
     } className="w-full flex relative">
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
        className="w-full border rounded-lg border-slate-400 py-4 pl-16 focus:border-green-500 focus:outline-none focus:shadow-outline bg-transparent text-white"
        type="text"
        placeholder="Search movies ..."
        onChange={(e) => setSearchTerms(e.target.value)}
        value={searchTerms}
      />
      <div className="flex flex-col w-1/8 mx-4 text-lg bg-transparent">
        <div className=" mx-auto text-SpringGreen">Vector Search for</div>
        <Selector searchOption={searchOption} setSearchOption={setSearchOption}/>  
      </div>
     
      <div onClick={()=>{ 
        setSubmitted(true); 
      
        }} className="flex ml-10 w-24 items-center justify-center text-white  bg-green-600 rounded py-2 px-4 cursor-pointer">
      <p>SEARCH</p>
      </div>
    </form>
   
    
  </div>
  )
}

export default SearchBar