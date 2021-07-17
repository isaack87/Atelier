import React from 'react';

const SearchBar = (props) => (
  <div className="searchbar">
    <form action="/" method="post">
      <p className="searchbartitle"> QUESTIONS & ANSWERS </p>
      <br />
      <input
        type="text"
        id="search"
        className="searchfield"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS ..."
        name="searchBar"
      />
      <button type="submit" className="searchbutton">
        <img alt="" className="imgmag" src="search.png" />
      </button>
    </form>
  </div>
);

export default SearchBar;
