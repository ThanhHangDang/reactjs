import React, { Component } from "react";
import {connect} from "react-redux";

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
      const action = {
        type: "GET_KEYWORD",
        payload: keyword,
      }
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatctToProps) (Search);
