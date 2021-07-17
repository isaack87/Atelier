import React from 'react'

var SearchBar = (props) => {

  return (
    <div className='searchbar'>
      <form action="/" method="post">
        <label className='searchbartitle'>QUESTIONS & ANSWERS</label>
          <br/>
          <input
            type="text"
            id="search"
            className="searchfield"
            placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS ...'
            name='searchBar'
            />
          <button type='submit' className="searchbutton">
          <img className="imgmag" src="search.png"></img>
          </button>
      </form>
      </div>
  )
}

export default SearchBar;