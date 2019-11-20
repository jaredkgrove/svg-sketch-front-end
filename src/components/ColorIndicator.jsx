import React from 'react';

 const ColorIndicator = ({color}) => {
    return (
        <div className='color-indicator' style={{backgroundColor:`hsl(${color.h},${color.s}%,${color.l}%)`}}></div>
    )
 }

 export default ColorIndicator