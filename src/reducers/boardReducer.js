import {CLICKED} from '../actions/actionTypes'

const boardReducer = (state = {
    squares:  Array(100).fill(null),
    gray: false
    

}, action) => {
    switch(action.type){
      case CLICKED: 
      
        return {
            ...state
        }
    default:
        return state;
    }
}

export default boardReducer
