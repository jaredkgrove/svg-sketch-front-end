export function fetchSketches(){
    return (dispatch) => {
        fetch(`/api/v1/sketches`)
        .then((resp) => {
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.json()
        })
        .then((sketches) => {
            dispatch({type: 'FETCH_SKETCHES', 
            payload: sketches['data'].map(sketch => ({id: sketch['id'], name: sketch['attributes']['name'], url: sketch['links']['sketch_url'], lastUpdated: sketch['attributes']['last_updated']}))
            })})
        .catch(error => console.log(error))
    }
}

