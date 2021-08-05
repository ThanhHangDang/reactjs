import React, { Component } from 'react';
import data from "./data.json";

export default class ExampleList extends Component {

    constructor(props){
        super(props);
        this.state = {
            listMovie : data,
        }
    }

    renderMovie = () => {
        const {listMovie} = this.state;
        return listMovie.map((item, index) => {
            return (
                <div key={index} className="col-md-4 text-center pt-5 pb-5">    
                    <img className="img-fluid boder-danger" src={item.hinhAnh} alt="ImageMovie"></img>
                    <div>
                        <h3>{item.tenPhim}</h3>
                        <p>{item.moTa}</p>
                        <p>Đánh giá: {item.danhGia}</p>
                    </div>
                </div>              
            );
        })   
    }

    render() {
        return (
            <div>
                <h3>ExampleListKeys</h3>
                <div className="row">{this.renderMovie()}</div>
            </div>          
        )
    }
}
