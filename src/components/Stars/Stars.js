import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { greyC, pinkC } from '../../constants';

import "./Stars.scss";
import "./StarsResponsive.scss";


export default function Stars({rating})  {

    const [tabRating, setTabRating] = useState([greyC,greyC,greyC,greyC,greyC]);

    useEffect(() => {
        switch (rating) {
            case '1':
                setTabRating([pinkC,greyC,greyC,greyC,greyC])
                break;
            case '2':
                setTabRating([pinkC,pinkC,greyC,greyC,greyC])
                break;
            case '3':
                setTabRating([pinkC,pinkC,pinkC,greyC,greyC])
                break;
            case '4':
                setTabRating([pinkC,pinkC,pinkC,pinkC,greyC])
                break;
            case '5':
                setTabRating([pinkC,pinkC,pinkC,pinkC,pinkC])
                break;
            default:
                setTabRating([greyC,greyC,greyC,greyC,greyC]);
                break;
        }
    }, [rating]);

    return  (   
        <div className='Stars'>            
            <FontAwesomeIcon key="id1" icon={faStar} color={tabRating[0]} />
            <FontAwesomeIcon key="id2" icon={faStar} color={tabRating[1]} />
            <FontAwesomeIcon key="id3" icon={faStar} color={tabRating[2]} />
            <FontAwesomeIcon key="id4" icon={faStar} color={tabRating[3]} />
            <FontAwesomeIcon key="id5" icon={faStar} color={tabRating[4]} />            
        </div>      
    ); 
}