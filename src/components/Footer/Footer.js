import React from "react";
import "./Footer.scss";
import "./FooterResponsive.scss";

export default function Footer() {
    return (
            <footer>
                <div className="footerContainer">        
                    <img src="/images/LOGO_white.png" alt="footer_logo"/>
                    <div className="kasaRights">© 2020 Kasa. All rights reserved</div>
                </div>
            </footer>
        )
}