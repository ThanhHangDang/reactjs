import React, { Component } from 'react'

export default class FormValidation extends Component {

    constructor(props){
        super(props);
        this.state = {
            values: {
                manv : "",
                tennv: "",
                email: "",
            },

            errors: {
                manv : "",
                tennv: "",
                email: "",
            },
            manvValid: false,
            tennvValid: false,
            emailValid: false,
            formValid: false,
        }
    }

    handleOnchange = (event) => {
        const {name, value} = event.target;
        this.setState({
            values: {...this.state.values, [name]: value},  
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    handleErrors = (event) => {
        const {name, value} = event.target;

        // if(value.trim() === ""){
        //     mess = name + "Không được rỗng";
        // }
        // else{
        //     mess = "";
        // }
        let mess = value.trim() === "" ? name + " Không được rỗng" : "";
        let {manvValid, tennvValid, emailValid} = this.state;
        switch (name) {
            case "manv":
                manvValid = mess === "" ? true : false;
                if(value && value.length <= 4){
                    mess = "Độ dài kí tự từ 5";
                    manvValid = false;
                }
                break;
            
            case "tennv":
                tennvValid = mess === "" ? true : false;
                break;

            case "email":
                emailValid = mess === "" ? true : false;
                if(value && !value.match("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$")){
                    mess = "Email kkhông đúng định dạng";
                    emailValid = false;
                }
                break;
    
            default:
                break;
        }

        this.setState({
            errors: {...this.state.errors, [name]:mess},
            manvValid,
            tennvValid,
            emailValid,
        },
        () => {this.handleFormValid()})
    }

    handleFormValid = () => {
        const {manvValid, tennvValid, emailValid} = this.state;
        this.setState({
            formValid: manvValid && tennvValid && emailValid,
        })
    }

    render() {
        const {errors} = this.state;
        return (
          <div className="container">
            <h3 className="title">*FormValidation</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Mã nhân viên</label>
                <input 
                    type="text" 
                    className="form-control"
                    name="manv" 
                    onChange={this.handleOnchange}
                    onBlur={this.handleErrors}
                />
                {errors.manv ? (
                    <div className="alert alert-danger">{errors.manv}</div>
                ) : ""}
              </div>
              <div className="form-group">
                <label>Tên nhân viên</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="tennv" 
                    onChange={this.handleOnchange}
                    onBlur={this.handleErrors}
                />
                {errors.tennv ? (
                    <div className="alert alert-danger">{errors.tennv}</div>
                ) : ""}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    onChange={this.handleOnchange}
                    onBlur={this.handleErrors}
                />
                {errors.email ? (
                    <div className="alert alert-danger">{errors.email}</div>
                ) : ""}
              </div>
              <button 
                type="submit" 
                className="btn btn-success"
                disabled={!this.state.formValid}
              >
                Submit
              </button>
            </form>
          </div>
        );
    }
}
