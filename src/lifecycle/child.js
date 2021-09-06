import React, { Component } from 'react'

export default class Child extends Component {

    constructor(props){
        super(props);
        this.interval = null;

        this.state = {
            usernameChild: "Hàng",
            numberChild: 5,
        }
    }

    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log("UNSAFE_componentWillReceiveProps", nextProps)
    // }

    static getDerivedStateFromProps(nextProps, currentState){
        console.log("getDerivedStateFromProps", nextProps, currentState);
        if(nextProps && nextProps.number === currentState.numberChild){
            //cập nhật lại state (không dùng setState)
            return {
                usernameChild: "Dang",
            }
        }
        return null;
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            console.log("Hello Child Component");
        }, 1000)
    }

    componentWillUnmount(){
        //Life Cycle bị huỷ
        console.log(" componentWillUnmount");
        clearInterval(this.interval);
    }

    render() {
        console.log("Child")
        return (
            <div>
                <h3>Child</h3>
                <p>
                    Props number: {this.props.number} - State number: {this.state.numberChild} - State usernameChild: {this.state.usernameChild}
                </p>
            </div>
        )
    }
}

