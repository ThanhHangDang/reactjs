import React, { Component } from "react";

class Search extends Component {

  handleGetKeyWord = (event) => {
    this.props.getKeyWord(event.target.value);
  }

  render() {
    return <input 
      type="text" 
      className="form-control mb-3 w-50" 
      onChange={this.handleGetKeyWord}/>;
  }
}

export default Search;
