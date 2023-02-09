import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiFillHeart} from 'react-icons/ai'
import 'swiper/css';
const Favourites = (props) => {
    return (
    <>
        <div className='container'>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        >
        <div className="imageBox">
            
        {
                props.movies.map((movie,i)=>(
                    <>
                    {console.log(movie)}
                    <SwiperSlide key={i}>
                        <div className='imageContainer dflex'>
                            <img className='moviePoster' src={movie.Poster} alt="Movie IMG" />
                                <div onClick={()=>props.handleFavouritesClick(movie)} className="overlay flexCenter">
                                    <p>{movie.Titlex}</p>
                                <AiFillHeart size={15}/>
                            </div>

                        </div>
                    </SwiperSlide>
                    </>
                    )
                )
            }
        </div>
        </Swiper>
        </div>

    </>
  )
}

export default Favourites