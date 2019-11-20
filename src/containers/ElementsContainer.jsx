import React from 'react';
import Circle from '../components/Circle'
import Line from '../components/Line'
import Rectangle from '../components/Rectangle'
import Polyline from '../components/Polyline';

 const ElementsContainer = (props) => (
    <>
        {props.elements.map( (elem) => {
            switch(elem.type) {
                case 'Circle':
                  return <Circle properties={elem.properties}/>
                case 'Line':
                    return <Line properties={elem.properties}/>
                case 'Rectangle':
                  return <Rectangle properties={elem.properties}/>
                case 'Polyline':
                    return <Polyline properties={elem.properties}/>
                default:
                  return <div>Don't know what this is</div>;
              }        
        })}
    </>
 );

 export default ElementsContainer