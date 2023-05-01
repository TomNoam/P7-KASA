import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss";
import "./NavbarResponsive.scss";

function Navbar(){

    return (
        <nav>
            <div className="navBlock">              
                <div className="logo"><img src={process.env === "development" ? "/images/LOGO.png": "/build/images/LOGO.png"} alt="logo"/></div>            
                <div className="navPages">
                    <Link to="/"><div className="navChoice">Accueil</div></Link> 
                    <Link to="/propos"><div className="navChoice"> A Propos </div></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;