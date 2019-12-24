import {
  CLICKED,
  ACTIVATE,
  FIREBASE
} from '../actions/actionTypes'

const initialState = {
  // squares: {
  // 0: [ {key: 1}, key: 5}, {key: 6}, {key: 7}, {key: 8}, {key: 9}, {key: 10} ],
  // 1: [ {key: 11}, {key: 12}, {key: 13}, {key: 14}, {key: 15}, {key: 16}, {key: 17}, {key: 18}, {key: 19}, {key: 20} ],
  // 2: [ {key: 21}, {key: 22}, {key: 23}, {key: 24}, {key: 25}, {key: 26}, {key: 27}, {key: 28}, {key: 29}, {key: 30} ],
  // 3: [ {key: 31}, {key: 32}, {key: 33}, {key: 34}, {key: 35}, {key: 36}, {key: 37}, {key: 38}, {key: 39}, {key: 40} ],
  // 4: [ {key: 41}, {key: 42}, {key: 43}, {key: 44}, {key: 45}, {key: 46}, {key: 47}, {key: 48}, {key: 49}, {key: 50} ],
  // 5: [ {key: 51}, {key: 52}, {key: 53}, {key: 54}, {key: 55}, {key: 56}, {key: 57}, {key: 58}, {key: 59}, {key: 60} ],
  // 6: [ {key: 61}, {key: 62}, {key: 63}, {key: 64}, {key: 65}, {key: 66}, {key: 67}, {key: 68}, {key: 69}, {key: 70} ],
  // 7: [ {key: 71}, {key: 72}, {key: 73}, {key: 74}, {key: 75}, {key: 76}, {key: 77}, {key: 78}, {key: 79}, {key: 80} ],
  // 8: [ {key: 81}, {key: 82}, {key: 83}, {key: 84}, {key: 85}, {key: 86}, {key: 87}, {key: 88}, {key: 89}, {key: 90} ],
  // 9: [ {key: 91}, {key: 92}, {key: 93}, {key: 94}, {key: 95}, {key: 96}, {key: 97}, {key: 98}, {key: 99}, {key: 100} ]
  // }
  active: false,
  squares: {
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
  }
}
const boardReducer = (state = initialState, action) => {
  // let newState = deepCopy(state)
  switch (action.type) {
    case CLICKED:
      const x = action.key.slice(0, 1)
      const y = action.key.slice(1, 2)
      const findKey = state.squares[x].find(square => square.key = `${x}${y}`)
      console.log('FIND RESULT', findKey)
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
    case FIREBASE:
      console.log('firebase reducer')
      console.log('this should be the game state:', action.payload)
      return {...state}
    default:
      return state
  }
}

export default boardReducer
