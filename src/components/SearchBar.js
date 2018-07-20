import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: ""
    };
  }

  handleInputChange = e => {
    // console.log(e.target.value);
    this.setState({ term: e.target.value });
    this.props.onSearchTermChange(e.target.value);
  };
  render() {
    // console.log(this.props);
    return (
      <div className="searchBar">
        <input
          placeholder="Search..."
          value={this.state.term}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;
