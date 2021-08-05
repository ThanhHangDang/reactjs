import React, { Component } from 'react'
import Child from './child'
import ChildFunction from './child-function';
import Children from './children';

export default class Communication extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "HIHI",
            age: 18,
        }
    }
    
    handleChangInfo = () => {
        this.setState({
            username: "ha",
            age: 25
        })
    }

    handleReceiveFromChild = (infoReset) => {
        //Cập nhật lại state
        this.setState({
            username: infoReset.username,
            age: infoReset.age,
        })
    }

    render() {
        return (
            <div>
                <h3>*Communication</h3>
                <p>Username: {this.state.username} - Age: {this.state.age}</p>
                <button className="btn btn-info" onClick={this.handleChangInfo}>Change Info</button>
                <hr />
                <Child username={this.state.username} age={this.state.age} getInfoReset={this.handleReceiveFromChild}/>
                <hr/>
                <ChildFunction username={this.state.username} age={this.state.age}/>
                <hr/>
                <Children>
                    <p>Username: {this.state.username} - Age: {this.state.age}</p>
                </Children>
            </div>
        )
    }
}
