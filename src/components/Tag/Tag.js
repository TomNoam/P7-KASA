import React from 'react';
import "./Tag.scss";
import "./TagResponsive.scss";

export default function Tag(props) {

    return (
        <div className='tagContainer'>
            <div className='tagText'>{props.tags}</div>
        </div>
    )
}