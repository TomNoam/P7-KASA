import React from "react";
import "./Card.scss";
import "./CardResponsive.scss";
import {Link} from "react-router-dom";

export default function Card(props) {
    
    const { housing } = props;

    return (
        <Link to={"/fiche/"+ housing.id}>
            <div className="Card">
                <img src={housing.cover} alt="housing_cover"></img>                
                <div className="cardBox">
                    <div className="cardKasa">{housing.title}</div>
                </div>
            </div>
        </Link>               
    )
   
}