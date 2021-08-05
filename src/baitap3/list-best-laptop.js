import React, {Component} from "react";
import Laptop from "./laptop";

class ListBestLaptop extends Component {
    render(){
        return (
            <section id="laptop" class="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 class="text-center">BEST LAPTOP</h1>
                <div class="row">
                    <Laptop />
                    <Laptop />
                    <Laptop />
                    <Laptop />
                </div>
            </section>
        );
    }
}

export default ListBestLaptop;