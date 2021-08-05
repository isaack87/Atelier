import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      searchTerm: e.target.value,
    }, () => {
      this.search(e);
    });
  }

  search(e) {
    e.persist();
    let searchTerm = this.state.searchTerm
    this.props.onSearch(searchTerm);
  }

  render() {
    return (
      <div className="cell">
      <div className="searchbar">
        <form>
          <p className="searchbartitle">QUESTIONS & ANSWERS</p>
          <br />
          <input
            onChange={this.onChange}
            className="searchfield"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS ..."
          />
          <button type="submit" className="searchbutton" onClick={this.search}>
            <img className="imgmag" src="search.png" alt="searchlogo" />
          </button>
        </form>
      </div>
      <div>
      </div>
      </div>
    );
  }
}

export default SearchBar;
