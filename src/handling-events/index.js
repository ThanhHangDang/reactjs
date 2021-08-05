import React, { Component } from 'react';
import ExampleHandlingEvents from './example';

export default class HandlingEvents extends Component {

    handleEvents(){
        console.log(123)
    }

    handleEventParams(username, age){
        console.log(username, age)
    }

    render() {
        return (
            <div>
                <h3>Handling Events</h3>
                <button className="btn btn-success" onClick={this.handleEvents}>Handling Events</button>
                <button className="btn btn-danger" onClick={() => {this.handleEventParams("hang", 18)}}>HandlingEvents Params</button>
                <ExampleHandlingEvents />
            </div>

            
        )
    }

    
}
