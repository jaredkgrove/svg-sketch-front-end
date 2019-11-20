import React from 'react';
import { Link } from 'react-router-dom';
 
const SketchesList = ({ sketches }) => {
  
  const renderSketches = () => sketches.map(sketch => (<><Link key={sketch.id} to={sketch.url}>{sketch.name}</Link> <br/></>));
 
  return (
      <>
        {renderSketches()}
      </>
  );
};
export default SketchesList
