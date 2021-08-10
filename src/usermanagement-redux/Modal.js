import React, { Component, createRef } from "react";
import {connect} from "react-redux";

class Modal extends Component {

  constructor(props){
    super(props);

    this.close = createRef();
    this.state = {
      id: "",
      username:"",
      fullname:"",
      email:"",
      phoneNumber:"",
      type:"USER"
    }
    // Constructor chỉ chạy đúng 1 lần duy nhất
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    //Nó sẽ chạy khi nhận 1 props mới thay đổi
    
    // cập nhật lại state theo nextProps.userEDit
    if (nextProps && nextProps.userEdit){
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        fullname: nextProps.userEdit.fullname,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      })
    }
    else{
      this.setState({
        id: "",
      username:"",
      fullname:"",
      email:"",
      phoneNumber:"",
      type:"USER"
      })
    }
  }

  handleOnchange = (event) => {
    const {name, value}= event.target;
    this.setState({
      [name] : value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.close.current.click();
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="username"
                    onChange={this.handleOnchange} 
                    value={this.state.username}/>
                </div>
                <div className="form-group">
                  <label>FullName</label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="fullname"
                    onChange={this.handleOnchange}
                    value={this.state.fullname} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="email"
                    onChange={this.handleOnchange} 
                    value={this.state.email}/>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="phoneNumber"
                    onChange={this.handleOnchange} 
                    value={this.state.phoneNumber}/>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select 
                    className="form-control"
                    name="type" 
                    onChange={this.handleOnchange}
                    value={this.state.type}>
                      <option>USER</option>
                      <option>VIP</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-success" >
                    Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (user) => {
      const action = {
        type: "SUBMIT",
        payload: user,
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Modal);
