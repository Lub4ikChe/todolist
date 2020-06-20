import React from 'react';
import './Badge.scss';


function Badge({ color, setcolorIdValue, colorId, active }) {
    let activeClass = active === true ? 'active' : '';
    return (
        <i
            onClick={() => setcolorIdValue(colorId)}
            className={`badge badge--${color} ${activeClass}`}></i>
    );
}

export default Badge;
