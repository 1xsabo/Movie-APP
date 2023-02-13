import '../App.css';
import { useState ,useEffect} from 'react';
import MovieList from './MovieList';
import axios from 'axios';
import MovieListSearch from './MovieListSearch';
import Favourites from './Favourites';

const Main = () => {
    const [movies, setMovies] = useState([])
    const [favourites,setFavourites] = useState([])
    const [search, setSearch] = useState('Avengers')
  const getMovieUrl = async (e)=>{
    const url= `https://www.omdbapi.com/?s=${search}&apikey=2b8e968c`
    const response = await axios.get(url)
    const movie = response.data
    if(e.key=== 'Enter'){
      const url= `https://www.omdbapi.com/?s=${search}&apikey=2b8e968c`
      const response = await axios.get(url)
      const movie = response.data
      if(movie.Search){
        setMovies(movie.Search)
      } 
    }
    if(movie.Search){
      setMovies(movie.Search)
    } 
  }
  useEffect(() => {
  getMovieUrl(search)}
  // eslint-disable-next-line
  ,[search])
  const addFavouriteMovie = (movie) => {
    const existingMovie = favourites.find(favourite => favourite.imdbID === movie.imdbID);
    if (!existingMovie) {
      const newFavourites = [...favourites, movie];
      setFavourites(newFavourites);
      saveToLocalStorage(newFavourites);
    }
  };
  const saveToLocalStorage = (items)=>{
    localStorage.setItem('react-movie-app-favs',JSON.stringify(items))
  }
  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favs'));
    if(movieFavourites?.length>0) {
      setFavourites(movieFavourites);
    }
      
    },[])
  const removeFavouriteMovie = (movie)=>{
    const newFavourites = favourites.filter(
      (favourite)=> favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavourites)
    saveToLocalStorage(newFavourites)
  }
  return (
    <>
      <div className='container'>
          <div className="movieSearch">
            <MovieListSearch heading={'Movies'} setSearch={setSearch} getMovieUrl={getMovieUrl}/>
          </div>
          {
            movies && (
              <div className="movieContainer">
            <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie}/>
          </div>
            )
          }
      </div>
      {
        favourites && (<div className='container'>
        <div className="Fav">
          <h1>Favourites</h1>
        </div>
        <div className="movieContainer">
          <Favourites movies={favourites} handleFavouritesClick={removeFavouriteMovie}/>
        </div>
    </div>)
      }
      
    </>
    )
}

export default Main