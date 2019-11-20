import React from 'react';

 const Rectangle = ({ properties }) => (
    <rect x={properties.x} y={properties.y} width={properties.width} height={properties.height} stroke={properties.stroke} fill={properties.fill} strokeWidth={properties.stroke_width}/>
 );
 export default Rectangle