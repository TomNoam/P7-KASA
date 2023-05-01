import React from 'react';
import { useState } from 'react';

import "../Acordion/Acordion.scss";
import "../Acordion/AcordionResponsive.scss";

export default function AcordionList(props) {

    const [isOpen, setIsOpen] = useState(false);
    const equipments = props.equipments;

    return (
        <div className='wrapper'>
            <div className='acordion'>
                    <div className='item'>
                        <div className='titleBlock' onClick={() => setIsOpen(!isOpen)}>
                            <h2> {props.name} </h2>
                            {!isOpen && <img src="../../../images/arrowDOWN.png" alt='arrowUP' className='arrow'/>} 
                            {isOpen && <img src="../../../images/arrowUP.png" alt='arrowUP' className='arrow'/>}                         
                        </div>
                        <div className='animation_acordion'>{isOpen && <div className='contentText'>  <ol> {equipments.map((equipment) => <li key={equipment}>{equipment}</li>)} </ol>  </div>}</div>
                    </div>
            </div>
        </div>  
    );                 
}