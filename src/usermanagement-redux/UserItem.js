import React, { Component } from "react";
import {connect} from "react-redux";
import {actDelete, actEdit} from "./../redux/actions";

class UserItem extends Component {
  render() {
    const {user} = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              // this.props.getUserEdit(user);
              this.props.editUser(user);
            }}
          >
            Edit
          </button>
          <button 
            className="btn btn-danger"
            onClick={() => {
                // this.props.getUserDelete(user);
                this.props.deleteUser(user);
              }
            }
          >
              Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //key deleteUser nó chính là props tại component UserItem
    deleteUser: (user) => {
      //Đẩy action lên reducer
      dispatch(actDelete(user));
    },

    editUser: (user) => {
      dispatch(actEdit(user));
    }
  }
}

export default connect(null, mapDispatchToProps) (UserItem);
