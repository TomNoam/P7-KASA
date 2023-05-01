import React from 'react';
import { useState } from 'react';
import "./Acordion.scss";
import "./AcordionResponsive.scss";

export default function Acordion(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='wrapper'>
            <div className='acordion'>
                    <div className='item'>
                        <div className='titleBlock' onClick={() => setIsOpen(!isOpen)}>
                            <h2> {props.name} </h2>
                            {!isOpen && <img src="../../../images/arrowDOWN.png" alt='arrowUP' className='arrow'/>} 
                            {isOpen && <img src="../../../images/arrowUP.png" alt='arrowUP' className='arrow'/>}                         
                        </div>
                        <div className='animation_acordion'>{isOpen && <div className='contentText'>{props.content}</div>}</div>
                    </div>
            </div>
        </div>  
    );                 
}