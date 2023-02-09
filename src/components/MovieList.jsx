import React from 'react'
import Slider from "react-slick";
import {AiFillHeart} from 'react-icons/ai'
const MovieList = (props) => {
    const settings = {
        dots: false,
        infinty:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
      };
    return (
    <>
        <div className='container'>
        <Slider {...settings}>
            {
                props.movies.map((movie,i)=>(
                <div className='imageContainer dflex' key={i}>
                    <img className='moviePoster' src={movie.Poster} alt="Movie IMG" />
                    <div onClick={()=>props.handleFavouritesClick(movie)} className="overlay flexCenter">
                        <p>{movie.Title}</p>
                        <AiFillHeart size={15}/>
                    </div>
                </div>
                    )
                )
            }   
        </Slider>
        </div>

    </>
  )
}

export default MovieList