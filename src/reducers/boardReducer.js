import { CLICKED, SHIPHIT } from '../actions/actionTypes'
import hitShip from '../logic/logic'

const initialState = {
  isPlaying: true,
  squares: {
    0: [{ key: '0A', ship: true, clicked: false}, { key: '0B', ship: true, clicked: false}, { key: '0C', ship: false, clicked: false}, { key: '0D', ship: false, clicked: false }, { key: '0E', ship: false, clicked: false }, { key: '0F', ship: false, clicked: false }, { key: '0G', ship: false, clicked: false }, { key: '0H', ship: false, clicked: false }, { key: '0I', ship: false, clicked: false }, { key: '0J', ship: false, clicked: false }],
    1: [{ key: '1A', ship: false, clicked: false }, { key: '1B', ship: false, clicked: false }, { key: '1C', ship: false, clicked: false }, { key: '1D', ship: false, clicked: false }, { key: '1E', ship: false, clicked: false }, { key: '1F', ship: false, clicked: false }, { key: '1G', ship: false, clicked: false }, { key: '1H', ship: false, clicked: false }, { key: '1I', ship: false, clicked: false }, { key: '1J', ship: false, clicked: false }],
    2: [{ key: '2A', ship: false, clicked: false }, { key: '2B', ship: false, clicked: false }, { key: '2C', ship: false, clicked: false }, { key: '2D', ship: false, clicked: false }, { key: '2E', ship: false, clicked: false }, { key: '2F', ship: false, clicked: false }, { key: '2G', ship: false, clicked: false }, { key: '2H', ship: false, clicked: false }, { key: '2I', ship: false, clicked: false }, { key: '2J', ship: false, clicked: false }],
    3: [{ key: '3A', ship: false, clicked: false }, { key: '3B', ship: false, clicked: false }, { key: '3C', ship: false, clicked: false }, { key: '3D', ship: false, clicked: false }, { key: '3E', ship: false, clicked: false }, { key: '3F', ship: false, clicked: false }, { key: '3G', ship: false, clicked: false }, { key: '3H', ship: false, clicked: false }, { key: '3I', ship: false, clicked: false }, { key: '3J', ship: false, clicked: false }],
    4: [{ key: '4A', ship: false, clicked: false }, { key: '4B', ship: false, clicked: false }, { key: '4C', ship: false, clicked: false }, { key: '4D', ship: false, clicked: false }, { key: '4E', ship: false, clicked: false }, { key: '4F', ship: false, clicked: false }, { key: '4G', ship: false, clicked: false }, { key: '4H', ship: false, clicked: false }, { key: '4I', ship: false, clicked: false }, { key: '4J', ship: false, clicked: false }],
    5: [{ key: '5A', ship: false, clicked: false }, { key: '5B', ship: false, clicked: false }, { key: '5C', ship: false, clicked: false }, { key: '5D', ship: false, clicked: false }, { key: '5E', ship: false, clicked: false }, { key: '5F', ship: false, clicked: false }, { key: '5G', ship: false, clicked: false }, { key: '5H', ship: false, clicked: false }, { key: '5I', ship: false, clicked: false }, { key: '5J', ship: false, clicked: false }],
    6: [{ key: '6A', ship: false, clicked: false }, { key: '6B', ship: false, clicked: false }, { key: '6C', ship: false, clicked: false }, { key: '6D', ship: false, clicked: false }, { key: '6E', ship: false, clicked: false }, { key: '6F', ship: false, clicked: false }, { key: '6G', ship: false, clicked: false }, { key: '6H', ship: false, clicked: false }, { key: '6I', ship: false, clicked: false }, { key: '6J', ship: false, clicked: false }],
    7: [{ key: '7A', ship: false, clicked: false }, { key: '7B', ship: false, clicked: false }, { key: '7C', ship: false, clicked: false }, { key: '7D', ship: false, clicked: false }, { key: '7E', ship: false, clicked: false }, { key: '7F', ship: false, clicked: false }, { key: '7G', ship: false, clicked: false }, { key: '7H', ship: false, clicked: false }, { key: '7I', ship: false, clicked: false }, { key: '7J', ship: false, clicked: false }],
    8: [{ key: '8A', ship: false, clicked: false }, { key: '8B', ship: false, clicked: false }, { key: '8C', ship: false, clicked: false }, { key: '8D', ship: false, clicked: false }, { key: '8E', ship: false, clicked: false }, { key: '8F', ship: false, clicked: false }, { key: '8G', ship: false, clicked: false }, { key: '8H', ship: false, clicked: false }, { key: '8I', ship: false, clicked: false }, { key: '8J', ship: false, clicked: false }],
    9: [{ key: '9A', ship: false, clicked: false }, { key: '9B', ship: false, clicked: false }, { key: '9C', ship: false, clicked: false }, { key: '9D', ship: false, clicked: false }, { key: '9E', ship: false, clicked: false }, { key: '9F', ship: false, clicked: false }, { key: '9G', ship: false, clicked: false }, { key: '9H', ship: false, clicked: false }, { key: '9I', ship: false, clicked: false }, { key: '9J', ship: false, clicked: false }]
  }
}
const boardReducer = (state = initialState, action) => {
  // let newState = deepCopy(state)
  switch (action.type) {
    case CLICKED:
       
      const x = action.key.slice(0, 1)
      const y = action.key.slice(1, 2)
      const findKey = state.squares[x].find(square => square.key === `${x}${y}`)
    //   console.log(findKey, '****', state.squares[x])
      if(findKey.ship){
        findKey.clicked = true
        // console.log('ship hit', findKey, state)
    } else {
        findKey.clicked = true
        // console.log('you missed bro', findKey)
    }
      return state
     
    default:
      return state
  }
}

export default boardReducer
