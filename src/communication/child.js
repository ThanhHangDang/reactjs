import React, { Component } from 'react'

export default class Child extends Component {

    handleResetInfo = () => {
        const infoReset = {
            username : "Hang",
            age : 18
        }
        this.props.getInfoReset(infoReset)
    }

    render() {
        return (
            <div>
                <h3>Child</h3>
                <p>Usename: {this.props.username} - Age: {this.props.age}</p>
                <button className="btn btn-info" onClick={this.handleResetInfo}>Reset Info</button>
            </div> 
        )
    }
}
