export const updateSketch = (id, data) => {

    return (dispatch) => {
        dispatch({ type: 'SAVING_SKETCH' });

        fetch(`/api/v1/sketches/${id}`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then((resp) => {
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.json()
        })
        .then(sketch => {
            dispatch(
            {
                type: 'UPDATE_CURRENT_SKETCH', 
                payload: {
                    id: sketch['data']['id'], 
                    name: sketch['data']['attributes']['name'], 
                    elements: sketch['included'].map((e) => ({type: e.attributes.elementable_type, properties: e.attributes.elementable}))
                }
                
            })

            dispatch(
                {
                    type: 'UPDATE_SKETCH', 
                    payload: {
                        id: sketch['data']['id'],
                        lastUpdated: sketch['data']['attributes']['last_updated'] 
                    }

                })
        }
        )
        .catch(error => console.log(error))
    
    }
}

