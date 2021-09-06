import React, { Component } from 'react';
import Pure from './pure';
import Child from './child';

export default class Lifecycle extends Component {

    constructor(props){
        super(props);
        console.log("contructor");
        //chạy 1 lần duy nhất

        this.state = {
            number: 0,
            status: true,
        }
    }

    UNSAFE_componentWillMount(){
        //chạy 1 lần duy nhất
        console.log("ComponentWillMount")
    }

    componentDidMount(){
        //chạy 1 lần duy nhất
        //call api 
        console.log("ComponentDidMount")
    }

    UNSAFE_componentWillUpdate(){
        console.log("ComponentWillUpdate")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("ComponentDidUpdate", prevProps, prevState)
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * kiểm tra: nếu như state.number bằng 2 => ko cho update
         */
        console.log("shouldComponentUpdate", nextProps, nextState);
        if(nextState && nextState.number === 2){
            return false;
        }
        return true;
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps", nextProps)
    }

    render() {
         //chạy nhiếu lần
        console.log("render")
        return (
            <div>
                <h3>Lifecycle</h3>
                <h1>Number: {this.state.number}</h1>
                <button 
                    className="btn btn-success" 
                    onClick={() => {
                        this.setState({
                            number: this.state.number + 1,
                        });
                    }}
                >
                    Tăng số
                </button>
                <hr/>
                <Pure number = {this.state.number}/>
                <hr />
                <button 
                    className="btn btn-info"
                    onClick={() => {
                        this.setState({
                            status: !this.state.status,
                        })
                    }}
                >
                    Chang Status
                </button>
                {/* {this.state.status ? <Child number = {this.state.number}/> : ""} */}
                {this.state.status && <Child number = {this.state.number}/>}
            </div>
        )
    }
}
