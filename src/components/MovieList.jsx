import React from 'react'
import Slider from "react-slick";
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const MovieList = (props) => {
    const settings = {
        dots: false,
        infinty:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
      };
    return (
    <>
        <div className='container'>
        <Slider {...settings}>
            {
                props.movies.map((movie,i)=>(
                    <>
                    <div className='imageContainer dflex' key={i}>
                    <Link to={'/details/'+ movie.imdbID}>
                    <img className='moviePoster' src={movie.Poster} alt="Movie IMG" />
                    </Link>
                    <div onClick={()=>props.handleFavouritesClick(movie)} className="overlay flexCenter">
                        <p>{movie.Title}</p>
                        <AiFillHeart size={15}/>
                    </div>
                    </div>
                    </>
                    )
                )
            }   
        </Slider>
        </div>

    </>
  )
}

export default MovieList