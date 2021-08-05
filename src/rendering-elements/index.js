import React, { Component } from 'react'

export default class RenderingElements extends Component {
    username = "Hang";
    age = 18;
    lop = "VLXD";

    rederInfo = () => {
        return (
            <>
                <p>Hello {this.username} - Tuổi: {this.age}</p>
                <p>Lớp: {this.lop}</p>
            </>
        )

    }

    render() {
        return (
            <div>
                <h3>*Rendering Elements</h3>
                {this.rederInfo()}
            </div>
        )
    }
}


