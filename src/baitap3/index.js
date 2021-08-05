import React, {Component} from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListSmartphone from "./list-smartphone";
import ListBestLaptop from "./list-best-laptop";
import Promotion from "./promotion";

class Baitap3 extends Component {
    render(){
        return (
            <div class="bg-dark">
                <Header />
                <Carousel />
                <ListSmartphone />
                <ListBestLaptop />
                <Promotion />
            </div>
        );

    }
}

export default Baitap3;