
export const deleteSketch = (id) => {

    return (dispatch) => {
        fetch(`/api/v1/sketches/${id}`,{
            method: 'DELETE',
        })
        .then((resp) => {
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.json()
        })
        .then((sketch) => { 

            dispatch(
            {
                type: 'DELETE_SKETCH', 
                payload: sketch
            })
        })
        .catch(error => console.log(error))
    
    }
}

