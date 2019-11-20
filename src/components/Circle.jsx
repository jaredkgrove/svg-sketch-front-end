import React from 'react';

 const Circle = ({ properties }) => (
    <circle cx={properties.cx} cy={properties.cy} r={properties.r} stroke={properties.stroke} fill={properties.fill} strokeWidth={properties.stroke_width}/>
 );

 export default Circle