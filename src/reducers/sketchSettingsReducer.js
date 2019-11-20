const sketchSettingsReducer = (state = {lineColor:{h: 0, s: 100, l:50}, lineWidth: '4', lineType: 'Line', fillColor:{h: 0, s: 100, l:50}}, action) => {

    switch(action.type) {
      case 'UPDATE_LINE_COLOR':
        return {...state, lineColor: {h: action.payload.h, s: action.payload.s, l: action.payload.l}}
      case 'UPDATE_FILL_COLOR':
          return {...state, fillColor: {h: action.payload.h, s: action.payload.s, l: action.payload.l}}
      case 'UPDATE_LINE_WIDTH':
          return {...state, lineWidth: action.payload}
      case 'UPDATE_LINE_TYPE':
          return {...state, lineType: action.payload}

    
      default:
        return state;
    }
  }
   
  export default sketchSettingsReducer;