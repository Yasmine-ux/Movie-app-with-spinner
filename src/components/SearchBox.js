import React from 'react'

function SearchBox({value = '', onchange=()=>{}}) {
    return (
        <div className='search-box'>
        <input type="text" 
        value={value}
        onChange={(event) => {
            onchange(event.target.value)
        }} 
        className='search-box-text'></input>
        <input type='button' value='Search' className='search-box-btn'></input>
      </div>
    )
}
export default  SearchBox
