import React from 'react';

import ElementsContainer from './ElementsContainer'

    const SketchPreviewContainer = (props) => (
        <svg viewBox = {`0 0 1000 500`} className={"sketch-board preview"} >
            <ElementsContainer elements={props.elements} />
        </svg>
    )

export default SketchPreviewContainer
