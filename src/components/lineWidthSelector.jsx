import React from 'react';

 const LIneWidthSlector = (props) => {

    const handleClick = (e) => {
        if(e.target.value){
            props.handleUpdate(e.target.value)
        }
    }

    const isCurrentSetting = (value) => (value === props.lineWidth)

    return (
        <>
            <button className={isCurrentSetting('2') ? 'selected' : null} onClick={handleClick} value={2} style={{height:'50%', width: '18%', margin:'1%'}}> 
                <div style={{background:'black', width:'2px',height:'2px'}}></div>
            </button>

            <button className={isCurrentSetting('4') ? 'selected' : null} onClick={handleClick} value={4} style={{height:'50%', width: '18%', margin:'1%'}}> 
                <div style={{background:'black', width:'4px',height:'4px'}}></div>
            </button>

            <button className={isCurrentSetting('6') ? 'selected' : null} onClick={handleClick} value={6} style={{height:'50%', width: '18%', margin:'1%'}}> 
                <div style={{background:'black', width:'6px',height:'6px'}}></div>
            </button>

            <button className={isCurrentSetting('8') ? 'selected' : null} onClick={handleClick} value={8} style={{height:'50%', width: '18%', margin:'1%'}}> 
                <div style={{background:'black', width:'8px',height:'8px'}}></div>
            </button>

            <button className={isCurrentSetting('10') ? 'selected' : null} onClick={handleClick} value={10} style={{height:'50%', width: '18%', margin:'1%'}}> 
                <div style={{background:'black', width:'10px',height:'10px'}}></div>
            </button>
        </>
    )
 }

 export default LIneWidthSlector