import React from "react";
import {Link} from "react-router-dom";
import "./e404.scss";
import "./e404Responsive.scss";

export default function e404 () {
    return (
            <div className="e404_container">
                <div className="big404"> 404 </div>
                <div className="text404"> Oups! La page que vous demandez n'existe pas. </div>
                <div className="back404"><Link to="/"> Retourner sur la page d'accueil </Link></div>
            </div>
        )
}