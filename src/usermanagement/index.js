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
      userEdit: null,
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
    let userList = [...this.state.userList];
    if(user.id){
      //update
      const index = this._findIndex(user.id)
      if(index !== -1){
        userList[index] = user;
      }
    }
    else{
      //add
      const userClone = {...user, id: new Date().getTime()}
      userList = [...this.state.userList, userClone];
    }
    
    this.setState({
      userList,
    })
  }

  handleGetUserEdit = (user) => {
    this.setState({
      userEdit : user,
    })
  }

  render() {
    //Filter userList trước khi truyền vào Component
    let {userList, keyword, userEdit} = this.state;
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
            onClick={() => {
              this.setState({
                userEdit:null,
              })
            }}
          >
            Add User
          </button>
        </div>
        <Users userList={userList} getUserDelete={this.handleDeleteUser} getUserEdit={this.handleGetUserEdit}/>
        <Modal onSubmit={this.handleSubmit} userEdit={userEdit}/>
      </div>
    );
  }
}

export default Home;
