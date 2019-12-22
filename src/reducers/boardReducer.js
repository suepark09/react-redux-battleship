import {CLICKED} from '../actions/actionTypes'

const initialState = {
    squares: {
    0: [ {key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}, {key: 8}, {key: 9}, {key: 10} ],
    1: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ],
    2: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ],
    3: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ],
    4: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ],
    5: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ],
    6: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ],
    7: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ],
    8: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ],
    9: [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ]
    }
}
const boardReducer = (state = initialState, action) => {
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