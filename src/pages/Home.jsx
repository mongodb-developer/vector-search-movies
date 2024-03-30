import React, {useState, useEffect} from 'react'
import Logo from "../images/Mlogo.svg";
import semanticSearchMovies from '../API';

// import components
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CodePanel from '../components/CodePanelComponents/CodePanel'
import Filter from '../components/FilterComponents/Filter'
import MovieResults from '../components/MovieResults';

const Home = () => {

  const [searchTerms, setSearchTerms] = useState('');
  const [searchOption, setSearchOption] = useState('plot');
  const [genre, setGenre] = useState([]);
  const [rating, setRating] = useState(0)
  const [dateStart, setDateStart] = useState(1945);
  const [dateEnd, setDateEnd] = useState(2018);
  const [submitted, setSubmitted] = useState(false);
  const [movies, setMovies] = useState([]);

  

  const handleSubmit = async (terms) => {
    setSearchTerms(terms);
    let data = {
      semanticSearchTerms: searchTerms,
      start: dateStart,
      end: dateEnd,
      genre: genre,
      rating: rating,
    };
   
    const response = await semanticSearchMovies(data, searchOption);
    if (response.status === 200){
      console.log(response.data);
      setMovies(response.data);
    }
    // setMovies(res.data.movies);
  }

  useEffect(() => {
    if (!submitted) return;
    let data = {
      semanticSearchTerms: searchTerms,
      start: dateStart,
      end: dateEnd,
      genre: genre,
      rating: rating,
    };
    semanticSearchMovies(data)
    setSubmitted(false);

    // eslint-disable-next-line
  }, [submitted]);

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
          <div className="px-10 w-full mt-10 mx-auto">
            <SearchBar  searchOption={searchOption} setSearchOption={setSearchOption} onSubmit={handleSubmit}/>
          </div>
        </div>
      </div>
     
     
     
      <div className='main-block flex mt-20 justify-center text-center px-10'>
        <div className="filter w-1/6 px-8 bg-transparent"><Filter rating={rating} setRating={setRating} genre={genre} setGenre={setGenre} setSubmitted={setSubmitted}/></div>
        <div className="movies w-3/4 px-8 bg-transparent"><MovieResults movies={movies}/></div>
        <div className="aggregation w-1/5 px-8 bg-transparent"><CodePanel/></div>
      </div>
      
 
  </div>
  )
}

export default Home