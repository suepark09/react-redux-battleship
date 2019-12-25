import { CLICKED, SHIPHIT, ACTIVATE, FIREBASE } from '../actions/actionTypes'
import { keyGen } from '../firebaseFunc'

const initialState = {
  gameId: '',
  isPlaying: false,
  active: false,
  squares: {
    0: [{ key: '0A', ship: true, color: false}, { key: '0B', ship: true, color: false}, { key: '0C', ship: false, color: false}, { key: '0D', ship: false, color: false }, { key: '0E', ship: false, color: false }, { key: '0F', ship: false, color: false }, { key: '0G', ship: false, color: false }, { key: '0H', ship: false, color: false }, { key: '0I', ship: false, color: false }, { key: '0J', ship: false, color: false }],
    1: [{ key: '1A', ship: false, color: false }, { key: '1B', ship: false, color: false }, { key: '1C', ship: false, color: false }, { key: '1D', ship: false, color: false }, { key: '1E', ship: false, color: false }, { key: '1F', ship: false, color: false }, { key: '1G', ship: false, color: false }, { key: '1H', ship: false, color: false }, { key: '1I', ship: false, color: false }, { key: '1J', ship: false, color: false }],
    2: [{ key: '2A', ship: false, color: false }, { key: '2B', ship: false, color: false }, { key: '2C', ship: false, color: false }, { key: '2D', ship: false, color: false }, { key: '2E', ship: false, color: false }, { key: '2F', ship: false, color: false }, { key: '2G', ship: false, color: false }, { key: '2H', ship: false, color: false }, { key: '2I', ship: false, color: false }, { key: '2J', ship: false, color: false }],
    3: [{ key: '3A', ship: false, color: false }, { key: '3B', ship: false, color: false }, { key: '3C', ship: false, color: false }, { key: '3D', ship: false, color: false }, { key: '3E', ship: false, color: false }, { key: '3F', ship: false, color: false }, { key: '3G', ship: false, color: false }, { key: '3H', ship: false, color: false }, { key: '3I', ship: false, color: false }, { key: '3J', ship: false, color: false }],
    4: [{ key: '4A', ship: false, color: false }, { key: '4B', ship: false, color: false }, { key: '4C', ship: false, color: false }, { key: '4D', ship: false, color: false }, { key: '4E', ship: false, color: false }, { key: '4F', ship: false, color: false }, { key: '4G', ship: false, color: false }, { key: '4H', ship: false, color: false }, { key: '4I', ship: false, color: false }, { key: '4J', ship: false, color: false }],
    5: [{ key: '5A', ship: false, color: false }, { key: '5B', ship: false, color: false }, { key: '5C', ship: false, color: false }, { key: '5D', ship: false, color: false }, { key: '5E', ship: false, color: false }, { key: '5F', ship: false, color: false }, { key: '5G', ship: false, color: false }, { key: '5H', ship: false, color: false }, { key: '5I', ship: false, color: false }, { key: '5J', ship: false, color: false }],
    6: [{ key: '6A', ship: false, color: false }, { key: '6B', ship: false, color: false }, { key: '6C', ship: false, color: false }, { key: '6D', ship: false, color: false }, { key: '6E', ship: false, color: false }, { key: '6F', ship: false, color: false }, { key: '6G', ship: false, color: false }, { key: '6H', ship: false, color: false }, { key: '6I', ship: false, color: false }, { key: '6J', ship: false, color: false }],
    7: [{ key: '7A', ship: false, color: false }, { key: '7B', ship: false, color: false }, { key: '7C', ship: false, color: false }, { key: '7D', ship: false, color: false }, { key: '7E', ship: false, color: false }, { key: '7F', ship: false, color: false }, { key: '7G', ship: false, color: false }, { key: '7H', ship: false, color: false }, { key: '7I', ship: false, color: false }, { key: '7J', ship: false, color: false }],
    8: [{ key: '8A', ship: false, color: false }, { key: '8B', ship: false, color: false }, { key: '8C', ship: false, color: false }, { key: '8D', ship: false, color: false }, { key: '8E', ship: false, color: false }, { key: '8F', ship: false, color: false }, { key: '8G', ship: false, color: false }, { key: '8H', ship: false, color: false }, { key: '8I', ship: false, color: false }, { key: '8J', ship: false, color: false }],
    9: [{ key: '9A', ship: false, color: false }, { key: '9B', ship: false, color: false }, { key: '9C', ship: false, color: false }, { key: '9D', ship: false, color: false }, { key: '9E', ship: false, color: false }, { key: '9F', ship: false, color: false }, { key: '9G', ship: false, color: false }, { key: '9H', ship: false, color: false }, { key: '9I', ship: false, color: false }, { key: '9J', ship: false, color: false }]
  }
}

const deepCopy = (x) => JSON.parse(JSON.stringify(x))

const boardReducer = (state = initialState, action) => {
  let stateCopy = deepCopy(state)
  switch (action.type) {
    case CLICKED:
       
      const x = action.key.slice(0, 1)
      const y = action.key.slice(1, 2)

      const square = stateCopy.squares[x].find(square  => square.key === `${x}${y}`)
      // const index = stateCopy.squares[x].indexOf(square)
      // console.log(index, 'index')
      // console.log(square, 'before ****', stateCopy.squares[x])
     
    
        square.color = true
        // console.log('you missed bro', findKey)
    
    // console.log(square, 'after ****', stateCopy.squares[x])
      return stateCopy
    case ACTIVATE:
      // console.log('active?')
      //   return {
      //     active: true,
      //   };
      return {
        ...stateCopy,
        active: true
      }
    case FIREBASE:
      const gameId = keyGen(action.payload)
      console.log('REDUCER GAME ID:', gameId)
      return { gameId: gameId, ...stateCopy }
    default:
      return stateCopy
  }
}

export default boardReducer
