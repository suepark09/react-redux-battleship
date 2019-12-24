<<<<<<< HEAD
import { CLICKED, SHIPHIT, ACTIVATE } from '../actions/actionTypes'
import hitShip from '../logic/logic'
=======
import { CLICKED, ACTIVATE } from '../actions/actionTypes'
>>>>>>> master

const initialState = {
  isPlaying: true,
  active: false,
  squares: {
<<<<<<< HEAD
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
=======
    0: [{ key: '0A' }, { key: '0B' }, { key: '0C' }, { key: '0D' }, { key: '0E' }, { key: '0F' }, { key: '0G' }, { key: '0H' }, { key: '0I' }, { key: '0J' }],
    1: [{ key: '1A' }, { key: '1B' }, { key: '1C' }, { key: '1D' }, { key: '1E' }, { key: '1F' }, { key: '1G' }, { key: '1H' }, { key: '1I' }, { key: '1J' }],
    2: [{ key: '2A' }, { key: '2B' }, { key: '2C' }, { key: '2D' }, { key: '2E' }, { key: '2F' }, { key: '2G' }, { key: '2H' }, { key: '2I' }, { key: '2J' }],
    3: [{ key: '3A' }, { key: '3B' }, { key: '3C' }, { key: '3D' }, { key: '3E' }, { key: '3F' }, { key: '3G' }, { key: '3H' }, { key: '3I' }, { key: '3J' }],
    4: [{ key: '4A' }, { key: '4B' }, { key: '4C' }, { key: '4D' }, { key: '4E' }, { key: '4F' }, { key: '4G' }, { key: '4H' }, { key: '4I' }, { key: '4J' }],
    5: [{ key: '5A' }, { key: '5B' }, { key: '5C' }, { key: '5D' }, { key: '5E' }, { key: '5F' }, { key: '5G' }, { key: '5H' }, { key: '5I' }, { key: '5J' }],
    6: [{ key: '6A' }, { key: '6B' }, { key: '6C' }, { key: '6D' }, { key: '6E' }, { key: '6F' }, { key: '6G' }, { key: '6H' }, { key: '6I' }, { key: '6J' }],
    7: [{ key: '7A' }, { key: '7B' }, { key: '7C' }, { key: '7D' }, { key: '7E' }, { key: '7F' }, { key: '7G' }, { key: '7H' }, { key: '7I' }, { key: '7J' }],
    8: [{ key: '8A' }, { key: '8B' }, { key: '8C' }, { key: '8D' }, { key: '8E' }, { key: '8F' }, { key: '8G' }, { key: '8H' }, { key: '8I' }, { key: '8J' }],
    9: [{ key: '9A' }, { key: '9B' }, { key: '9C' }, { key: '9D' }, { key: '9E' }, { key: '9F' }, { key: '9G' }, { key: '9H' }, { key: '9I' }, { key: '9J' }]
>>>>>>> master
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

    case ACTIVATE:
      console.log('active?')

      //   return {
      //     active: true,
      //   };
      return {
        ...state,
        active: true
      }
    default:
      return state
  }
}

export default boardReducer
