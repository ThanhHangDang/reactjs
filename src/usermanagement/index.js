import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json"
class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      userList : data,
      keyword : "",
    }
  }

  _findIndex = (user) => {
    return this.state.userList.findIndex((item) => {
      return item.id === user;
    });
  }

  handleDeleteUser = (user) => {

    let userList = [...this.state.userList];
    const index = this._findIndex(user.id)

    if(index !== -1){
      //tìm thấy => xoá
      userList.splice(index, 1);
      this.setState({
        userList,
      })
    }
  }

  handleGetKeyword = (keyword) => {
    this.setState({
      keyword,
    })
  }

  //add và update
  handleSubmit = (user) => {
    const userClone = {...user, id: new Date().getTime()}
    let userList = [...this.state.userList, userClone];
    this.setState({
      userList,
    })
  }

  render() {
    //Filter userList trước khi truyền vào Component
    let {userList, keyword} = this.state;
    userList = this.state.userList.filter((user) => {
      return (
        user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    })
    
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.handleGetKeyword}/>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users userList={userList} getUserDelete={this.handleDeleteUser}/>
        <Modal onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Home;
