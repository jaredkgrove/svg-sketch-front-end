import React from 'react';

 const Line = ({ properties }) => (
    <line x1={properties.x1} y1={properties.y1} x2={properties.x2} y2={properties.y2} stroke={properties.stroke} strokeWidth={properties.stroke_width}/>
 );

 export default Line