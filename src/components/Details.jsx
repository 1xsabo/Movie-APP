import React from 'react'
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Details = () => {
    const [movies, setMovies] = useState({}) 
    let {imdbID} = useParams()
    const getMovie = async (e)=>{
        const url= `https://www.omdbapi.com/?i=${imdbID}&apikey=2b8e968c`
        const response = await axios.get(url)
        const movie = response.data
        setMovies(movie)
      }
      useEffect(()=>{
        getMovie()
      },[])
  return (
    <>
    <div className='container'>
        <div className="movieHeader">
                <Link to='/'>Go Back</Link>
            <h1>{movies.Title}</h1>
        </div>
        <div className="movieContainer">
            <div className="movieLeft">
                <img src={movies.Poster} alt="" />
            </div>
            <div className="movieRight">
                <p className='plot'>Plot: {movies.Plot}</p>
                <p>Year: {movies.Year}</p>
                <p>Released: {movies.Released}</p>
                <p>Ratings:
                {movies?.Ratings?.map((rating,i) => <p> {rating.Source} - {rating.Value}</p>)   }
                </p>
                <p>Genre: {movies.Genre}</p>
                <p>Awards: {movies.Awards}</p>
                <p>Box Office: {movies.BoxOffice}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Details