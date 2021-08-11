import React from 'react';

class TopSearchBar extends React.Component {
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
    });
  }

  search(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className="App-container">
        <h1>FEC PROJECT</h1>
        <div className='navigationBar'>
          <ul className='navigation navigation1'>
            <li><a href="/">Logo ⍙</a></li>
          </ul>
          <ul className='navigation navigation2'>
            <li>
              <label className='topbartitle'>Enter Product id Here:</label>
              <input
                value={this.state.searchTerm}
                onChange={this.onChange}
                className="topsearchbar"
                placeholder="Enter Product Id 🔍"
              />
              <button onClick={this.search}>Submit</button>
            </li>
          </ul>
        </div>
        <div className='announce'>
          <p><i>SIDE-WIDE ANNOUNCEMENT MESSAGE!</i> - SALE / DISCOUNT <b>OFFER</b> - <u>NEW PRODUCT HIGHLIGHT</u></p>
        </div>

      </div>
    );
  }
}

export default TopSearchBar;





// import React from 'react';

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: '',
//     };
//     this.search = this.search.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(e) {
//     this.setState({
//       searchTerm: e.target.value,
//     }, () => {
//       this.search(e);
//     });
//   }

//   search(e) {
//     e.preventDefault();
//     let searchTerm = this.state.searchTerm;
//     this.props.onSearch(searchTerm);

//   };

