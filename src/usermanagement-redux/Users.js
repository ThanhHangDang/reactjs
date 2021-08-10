import React, { Component } from "react";
import UserItem from "./UserItem";
import {connect} from "react-redux";


class Users extends Component {

  renderListUser = () => {
    //props userList từ hàm mapStateToProps
    let {userList, keyword} = this.props;
    userList = userList.filter((user) => {
      return (
        user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    })

    return userList.map((user) => {
      return (
        <UserItem 
          key={user.id} 
          user={user} 
          // getUserDelete={this.props.getUserDelete} 
          // getUserEdit={this.props.getUserEdit}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListUser()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //key userList nó sẽ là props tại component Users
    userList: state.userReducer.userList,
    keyword: state.userReducer.keyword,
  }
}

export default connect(mapStateToProps, null) (Users);
