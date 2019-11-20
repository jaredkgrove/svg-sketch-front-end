export const clearCurrentSketch = (id, data) => {

    return (dispatch) => {
            dispatch(
            {
                type: 'CLEAR_CURRENT_SKETCH', 
                payload: {
                    id: '', 
                    name: '', 
                    elements: []
                }
            })
    }

}