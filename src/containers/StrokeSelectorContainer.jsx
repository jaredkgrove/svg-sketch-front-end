import React from 'react';
import { connect } from 'react-redux';
import LineWidthSelector from '../components/lineWidthSelector'
import LineTypeSelector from '../components/lineTypeSelector'

const StrokeSelectorContainer = (props) => {

    const handleLineWidthUpdate = (width) => {
        props.updateLineWidthSetting(width)
    }

    const handleLineTypeUpdate = (type) => {
        props.updateLineTypeSetting(type)
    }

    return(
        <div className="stroke-selectors">
            <h3>Line Width</h3>
            <div className='line-width'>
                <LineWidthSelector handleUpdate={handleLineWidthUpdate} lineWidth={props.settings.lineWidth}/>
            </div>
            <h3>Line Type</h3>
            <div className="line-type">
                <LineTypeSelector handleUpdate={handleLineTypeUpdate} lineType={props.settings.lineType}/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateLineWidthSetting: (width) => dispatch({ type: 'UPDATE_LINE_WIDTH', payload: width }),
      updateLineTypeSetting: (type) => dispatch({ type: 'UPDATE_LINE_TYPE', payload: type })
    }
  }

export default connect(null, mapDispatchToProps)(StrokeSelectorContainer)
