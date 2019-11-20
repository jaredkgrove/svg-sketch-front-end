const sketchReducer = (state = [], action) => {
    switch(action.type) {
      case 'FETCH_SKETCHES':
        return action.payload
      case 'CREATE_SKETCH':
        return [...state, {id: action.payload.id, name: action.payload.name, url:`/sketches/${action.payload.id}`}]
      case 'DELETE_SKETCH':
        let deleteIndex = state.findIndex(sketch => sketch.id == action.payload)
        return [...state.slice(0, deleteIndex), ...state.slice(deleteIndex + 1)]
      case 'UPDATE_SKETCH':
        let index = state.findIndex(sketch => sketch.id === action.payload.id)
        return [...state.slice(0, index), {...state[index], lastUpdated: action.payload.lastUpdated}, ...state.slice(index + 1)]
      default:
        return state;
    }
  }
   
  export default sketchReducer;