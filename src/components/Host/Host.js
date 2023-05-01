import React from 'react';
import "./Host.scss";
import "./HostResponsive.scss";


export default function Host(host) {

    return (
        <div className='hostContainer'>
            <div className='hostName'>{host.name}</div>
            <img className='hostPicture'src={host.picture} alt="Host Pic"/>
        </div>
    )
}