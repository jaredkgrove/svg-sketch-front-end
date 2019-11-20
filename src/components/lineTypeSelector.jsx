import React from 'react';

 const LineTypeSelector = (props) => {

    const handleClick = (e) => {
        console.log(e.target.value)
        props.handleUpdate(e.target.value)
    }

    const isCurrentSetting = value => (value === props.lineType)

    return (
        <>
            
            <button className={isCurrentSetting('Circle') ? 'selected' : null} onClick={handleClick} value='Circle' style={{paddingTop:'21%', margin:'1%', background: "url(/images/Circle.png)", backgroundSize: 'cover'}}> </button>
            <button className={isCurrentSetting('Line') ? 'selected' : null} onClick={handleClick} value='Line' style={{paddingTop:'21%', margin:'1%', background: "url(/images/Line.png)",  backgroundSize: 'cover'}}>  </button>
            <button className={isCurrentSetting('Rectangle') ? 'selected' : null} onClick={handleClick} value='Rectangle' style={{paddingTop:'21%', margin:'1%', background: "url(/images/Rectangle.png)", backgroundSize: 'cover'}}> </button>
            <button className={isCurrentSetting('Polyline') ? 'selected' : null} onClick={handleClick} value='Polyline' style={{paddingTop:'21%', margin:'1%', background: "url(/images/Free.png)", backgroundSize: 'cover'}}>  </button>
        </>
    )
 }

 export default LineTypeSelector