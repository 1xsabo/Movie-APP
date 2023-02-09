import React from 'react'

const MovieListSearch = (props) => {
  return (
    <>
    <div className='movieListSearch'>
        <div className="dflex">
        <h1>{props.heading}</h1>
        <input type="text" 
        className='search'
        value={props.value} 
        onChange={(event)=>props.setSearch(event.target.value)}
        onKeyPress={props.getMovieUrl}
        placeholder='Search'/>
        </div>
    </div>
    </>
  )
}

export default MovieListSearch