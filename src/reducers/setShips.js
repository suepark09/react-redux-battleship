const initialState = []

function setShips (state = initialState, action) {
  switch (action.type) {
    case 'CLICK_SQUARE':
      console.log('reducer new state', [...state, { text: 'You clicked a square!' }])
      return [...state, { text: 'You clicked a square!' }]
    default:
      return state
  }
}

export default setShips
