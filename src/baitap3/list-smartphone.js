import React, {Component} from "react";
import Phone from "./phone";

class ListSmartphone extends Component {
    render(){
       return (
        <section id="smartphone" className="container-fluid pt-5 pb-5">
            <h1 className="text-white text-center">BEST SMARTPHONE</h1>
            <div className="row">
                <Phone />
                <Phone />
                <Phone />
                <Phone />
            </div>
        </section>
       );
    }
}

export default ListSmartphone;