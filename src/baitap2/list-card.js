import React from "react";
import Card from "./card";

function ListCard(){
    return (
        <div className="row">
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default ListCard;