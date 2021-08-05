import React, { Component } from 'react';
import ExampleList from './example';

export default class ListKeys extends Component {

    constructor(props){
        super(props);
        this.state = {
            listUser : [
                {ten: "Hang", tuoi: 18},
                {ten: "Hang", tuoi: 19},
                {ten: "Dang", tuoi: 20},
            ],
        }
    }

    renderUsers = () => {
        const {listUser} = this.state;
        return listUser.map((item, index) => {
            return <li key={index}>{index + 1}. Tên: {item.ten} - Tuổi: {item.tuoi}</li>
        })
    }

    render() {
        return (
            <div>
                <h3>ListKeys</h3>
                <ul>
                    {this.renderUsers()}
                </ul>
                <section className="container">                                     
                    <ExampleList />                  
                </section>
            </div>
        )
    }
}
