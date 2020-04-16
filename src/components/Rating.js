import React from 'react'
import CountRating from './CountRating'

function Rating({count, Onchange}) {
    return (
        <div className='rating'>
          <span className='rating-choice'>Minimum rating</span>
          <CountRating 
          count={count}
          ChangingRating={(newRating) =>{
            Onchange(newRating)
        }} />
        </div>
    )
}
export default Rating