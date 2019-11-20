import React from 'react';

 const Polyline = ({ properties }) => (
    <polyline points={properties.points} stroke={properties.stroke} fill="transparent" strokeWidth={properties.stroke_width}/>
 );
 export default Polyline