import React from 'react'
import CountRating from './CountRating'
import '../App.css';

function MovieCard(props) {
    const {movie = {} }= props
    const {
        title='',
        year='',
        image ='',
        rating= 0
    } = movie
    return (
        <div className='movie-card'>
            <div className='movie-rating'><CountRating count={rating}/></div>
            <img className='movie-img' alt={image} src={image}></img>
            <div className='movie-description'>{title} - {year}</div>
          </div>
    )
}
export default MovieCard
