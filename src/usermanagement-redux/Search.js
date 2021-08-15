import React, { Component } from "react";
import {connect} from "react-redux";
import {actSearch} from "./../redux/actions"

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

const mapDispatctToProps = (dispatch) => {
  return{
    getKeyWord: (keyword) => {
      dispatch(actSearch(keyword))
    }
  }
}

export default connect(null, mapDispatctToProps) (Search);
