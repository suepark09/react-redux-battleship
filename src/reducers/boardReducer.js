import { CLICKED, ORIENTATION, ACTIVATE, FIREBASE, DEACTIVATE_BOARD, P1ATTACK, P2ATTACK, DEACTIVATE_BUTTON, UPDATE_STATE, DEACTIVATE_BUTTON2, ACTIVATE2, DEACTIVATE_BOARD2, ORIENTATION2, CLICKED2  } from '../actions/actionTypes'
import { keyGen } from '../firebaseFunc'

const initialState = {
  gameId: '',
  isPlaying: false,
  isPlaying2: false,
  active: false,
  active2: false,
  activeP1: false,
  activeP2: false,
  visibleLabel: [true, true, true, true, true],

  visibleLabel2: [true, true, true, true, true],

  playerTurnDisplay: ['Set Your Ships!!', 'Attack Your Opponent!', 'Wait For Opponent Move', 'Waiting On Opponent To Set Ships...'],

  activeBtn: [true, true, true, true, true],
  activeBtn2: [true, true, true, true, true],
  isHorizontal: true,
  isHorizontal2: true,
  index: null,
  index2: null,
  ship: {id: null, name: null, length: null},
  ship2: {id: null, name: null, length: null},
  p1total: 17,
  p2total: 17,
  squares: {
    0: [{ key: '0A', ship: false, color: false }, { key: '0B', ship: false, color: false }, { key: '0C', ship: false, color: false }, { key: '0D', ship: false, color: false }, { key: '0E', ship: false, color: false }, { key: '0F', ship: false, color: false }, { key: '0G', ship: false, color: false }, { key: '0H', ship: false, color: false }, { key: '0I', ship: false, color: false }, { key: '0J', ship: false, color: false }],
    1: [{ key: '1A', ship: false, color: false }, { key: '1B', ship: false, color: false }, { key: '1C', ship: false, color: false }, { key: '1D', ship: false, color: false }, { key: '1E', ship: false, color: false }, { key: '1F', ship: false, color: false }, { key: '1G', ship: false, color: false }, { key: '1H', ship: false, color: false }, { key: '1I', ship: false, color: false }, { key: '1J', ship: false, color: false }],
    2: [{ key: '2A', ship: false, color: false }, { key: '2B', ship: false, color: false }, { key: '2C', ship: false, color: false }, { key: '2D', ship: false, color: false }, { key: '2E', ship: false, color: false }, { key: '2F', ship: false, color: false }, { key: '2G', ship: false, color: false }, { key: '2H', ship: false, color: false }, { key: '2I', ship: false, color: false }, { key: '2J', ship: false, color: false }],
    3: [{ key: '3A', ship: false, color: false }, { key: '3B', ship: false, color: false }, { key: '3C', ship: false, color: false }, { key: '3D', ship: false, color: false }, { key: '3E', ship: false, color: false }, { key: '3F', ship: false, color: false }, { key: '3G', ship: false, color: false }, { key: '3H', ship: false, color: false }, { key: '3I', ship: false, color: false }, { key: '3J', ship: false, color: false }],
    4: [{ key: '4A', ship: false, color: false }, { key: '4B', ship: false, color: false }, { key: '4C', ship: false, color: false }, { key: '4D', ship: false, color: false }, { key: '4E', ship: false, color: false }, { key: '4F', ship: false, color: false }, { key: '4G', ship: false, color: false }, { key: '4H', ship: false, color: false }, { key: '4I', ship: false, color: false }, { key: '4J', ship: false, color: false }],
    5: [{ key: '5A', ship: false, color: false }, { key: '5B', ship: false, color: false }, { key: '5C', ship: false, color: false }, { key: '5D', ship: false, color: false }, { key: '5E', ship: false, color: false }, { key: '5F', ship: false, color: false }, { key: '5G', ship: false, color: false }, { key: '5H', ship: false, color: false }, { key: '5I', ship: false, color: false }, { key: '5J', ship: false, color: false }],
    6: [{ key: '6A', ship: false, color: false }, { key: '6B', ship: false, color: false }, { key: '6C', ship: false, color: false }, { key: '6D', ship: false, color: false }, { key: '6E', ship: false, color: false }, { key: '6F', ship: false, color: false }, { key: '6G', ship: false, color: false }, { key: '6H', ship: false, color: false }, { key: '6I', ship: false, color: false }, { key: '6J', ship: false, color: false }],
    7: [{ key: '7A', ship: false, color: false }, { key: '7B', ship: false, color: false }, { key: '7C', ship: false, color: false }, { key: '7D', ship: false, color: false }, { key: '7E', ship: false, color: false }, { key: '7F', ship: false, color: false }, { key: '7G', ship: false, color: false }, { key: '7H', ship: false, color: false }, { key: '7I', ship: false, color: false }, { key: '7J', ship: false, color: false }],
    8: [{ key: '8A', ship: false, color: false }, { key: '8B', ship: false, color: false }, { key: '8C', ship: false, color: false }, { key: '8D', ship: false, color: false }, { key: '8E', ship: false, color: false }, { key: '8F', ship: false, color: false }, { key: '8G', ship: false, color: false }, { key: '8H', ship: false, color: false }, { key: '8I', ship: false, color: false }, { key: '8J', ship: false, color: false }],
    9: [{ key: '9A', ship: false, color: false }, { key: '9B', ship: false, color: false }, { key: '9C', ship: false, color: false }, { key: '9D', ship: false, color: false }, { key: '9E', ship: false, color: false }, { key: '9F', ship: false, color: false }, { key: '9G', ship: false, color: false }, { key: '9H', ship: false, color: false }, { key: '9I', ship: false, color: false }, { key: '9J', ship: false, color: false }]
  },
  squares2: {
    0: [{ key: '0A', ship: true, color: false }, { key: '0B', ship: true, color: false }, { key: '0C', ship: true, color: false}, { key: '0D', ship: false, color: false }, { key: '0E', ship: false, color: false }, { key: '0F', ship: false, color: false }, { key: '0G', ship: false, color: false }, { key: '0H', ship: false, color: false }, { key: '0I', ship: false, color: false }, { key: '0J', ship: false, color: false }],
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
const deactivateBoard = (state = initialState, action) => {
    const newActiveBtn = state.activeBtn.slice()
    const newVisibleLabel = state.visibleLabel.slice()
    newActiveBtn[action.index] = false
    newVisibleLabel[action.index] = false
    console.log(newVisibleLabel, '&&&&&&&&&&&')
    // if(newVisibleLabel) {

    // }
    return {
        ...state,
        active: false,
        visibleLabel: newVisibleLabel,
        activeBtn: newActiveBtn
    }
}
const deactivateBoard2 = (state = initialState, action) => {
    const newActiveBtn2 = state.activeBtn2.slice()
    const newVisibleLabel2 = state.visibleLabel2.slice()
    newActiveBtn2[action.index2] = false
    return {
        ...state,
        active2: false,
        visibleLabel2: newVisibleLabel2,
        activeBtn2: newActiveBtn2
    }
}


const boardReducer = (state = initialState, action) => {
  const stateCopy = deepCopy(state)
 
  
  switch (action.type) {
    case CLICKED:

      const x = action.key.slice(0, 1)
      const y = action.key.slice(1, 2)

      const square = state.squares[x].find(square  => square.key === `${x}${y}`)
      const index = state.squares[x].indexOf(square)
      console.log('wuts x and y', x, y);
      console.log(index, 'this is the index')
      console.log(square, 'before ****', state.squares[x])

        const test = { ...state.squares };
        const col = index;
        const ship = state.ship;

        //PREVENTS OVERLAPPING OF PIECES

        if(stateCopy.isHorizontal){
            if (col + ship.length <= 10) {
                for(let i = 0; i < ship.length; i++) {
                    if (test[x][col + i].giveColor) {
                        return state
                    } 
                }
            } else {
                for(let i = ship.length; i > 0; i--) {

                    if(test[x][10 - i].giveColor){
                        return state
                    }
                }
            }
        } else {
            if (parseInt(x) + ship.length <= 10 ) {
                for(let i = 0; i < ship.length; i++) {
                    if(test[parseInt(x) + i][index].giveColor){
                        return state
                    } 
                }
            } else {
                if(parseInt(x) === 9){
                    for(let i = ship.length; i > 0; i--) {
                        if(test[parseInt(x) - ship.length + i][index].giveColor){
                            return state
                        } 
                    }
                } else {
                    for(let i = ship.length; i > 0; i--) {
                        let m = 9;
                        if(test[parseInt(x) - ship.length + i][index].giveColor ||  test[parseInt(m) - ship.length + i][index].giveColor){
                            return state
                        } 
                    }
                }
               
            }
        }

            if(stateCopy.isHorizontal){
                if (col + ship.length <= 10) {
                    for(let i = 0; i < ship.length; i++) {      
                            test[x][col + i].ship = true;
                            test[x][col + i]["giveColor"] = true;
                            console.log('ive been clicked!')
                    }
                } else {
                    for(let i = ship.length; i > 0; i--) {
                            test[x][10 - i].ship = true;
                            test[x][10 - i]["giveColor"] = true;
                    }
                }
            } else {
                if (parseInt(x) + ship.length <= 10 ) {
                    for(let i = 0; i < ship.length; i++) { 
                            test[parseInt(x) + i][index].ship = true;   
                            test[parseInt(x) + i][index]["giveColor"] = true; 
                    }
                } else {
                    if(parseInt(x) === 9){
                        for(let i = ship.length; i > 0; i--) {
                                test[parseInt(x) - ship.length + i][index].ship = true;
                                test[parseInt(x) - ship.length + i][index] = true; 
                        }
                    } else {
                        for(let i = ship.length; i > 0; i--) {
                            let m = 9;
                                test[parseInt(m) - ship.length + i][index].ship = true;
                                test[parseInt(m) - ship.length + i][index]["giveColor"] = true; 
                        }
                    }
                }
               
            }
        // }
            
       
        state = deactivateBoard(state, {index: state.ship.id})
       

       
        
    console.log(square, 'after ****', state.squares[x])
    console.log(state, test, 'kekkekekeke')
      return {
        ...state,
        squares: test,
        index: index //so that i can pass it to pieces container
      }
      case CLICKED2:

      const x2 = action.key.slice(0, 1)
      const y2 = action.key.slice(1, 2)

      const square2 = state.squares2[x2].find(square  => square.key === `${x2}${y2}`)
      const index2 = state.squares2[x2].indexOf(square2)
      console.log('wuts x and y', x2, y2);
      console.log(index2, 'this is the index')
      console.log(square2, 'before ****', state.squares[x2])

        const test2 = { ...state.squares2 };
        const col2 = index2;
        const ship2 = state.ship2;

        //PREVENTS OVERLAPPING OF PIECES

     
        // }

  
            if(stateCopy.isHorizontal2){
                if (col2 + ship2.length <= 10) {
                    for(let i = 0; i < ship2.length; i++) {
                        if (test2[x2][col2 + i].giveColor) {
                            return state
                        } 
                    }
                } else {
                    for(let i = ship2.length; i > 0; i--) {
    
                        if(test2[x2][10 - i].giveColor){
                            return state
                        }
                    }
                }
            } else {
                if (parseInt(x2) + ship2.length <= 10 ) {
                    for(let i = 0; i < ship2.length; i++) {
                        if(test2[parseInt(x2) + i][index2].giveColor){
                            return state
                        } 
                    }
                } else {
                    if(parseInt(x2) === 9){
                        for(let i = ship2.length; i > 0; i--) {
                            if(test2[parseInt(x2) - ship2.length + i][index2].giveColor){
                                return state
                            } 
                        }
                    } else {
                        for(let i = ship2.length; i > 0; i--) {
                            let m = 9;
                            if(test2[parseInt(x2) - ship2.length + i][index2].giveColor ||  test2[parseInt(m) - ship2.length + i][index2].giveColor){
                                return state
                            } 
                        }
                    }
                   
                }
            }
    
                if(stateCopy.isHorizontal2){
                    if (col2 + ship2.length <= 10) {
                        for(let i = 0; i < ship2.length; i++) {      
                                test2[x2][col2 + i].ship = true;
                                test2[x2][col2 + i]["giveColor"] = true;
                                console.log('ive been clicked!')
                        }
                    } else {
                        for(let i = ship2.length; i > 0; i--) {
                                test2[x2][10 - i].ship = true;
                                test2[x2][10 - i]["giveColor"] = true;
                        }
                    }
                } else {
                    if (parseInt(x2) + ship2.length <= 10 ) {
                        for(let i = 0; i < ship2.length; i++) {
                                // test2[parseInt(x) + i][index].color = true;   
                                test2[parseInt(x2) + i][index2].ship = true;   
                                test2[parseInt(x2) + i][index2]["giveColor"] = true; 
                                
                                // state = deactivateBoard(state, null)
                        }
                    } else {
                        if(parseInt(x2) === 9){
                            for(let i = ship2.length; i > 0; i--) {
                                    // test[parseInt(x) - ship.length + i][index].color = true;
                                    test2[parseInt(x2) - ship2.length + i][index2].ship = true;
                                    test2[parseInt(x2) - ship2.length + i][index2] = true; 
                                    // state = deactivateBoard(state, null)
                            }
                        } else {
                            for(let i = ship2.length; i > 0; i--) {
                                let m = 9;
                                    // test2[parseInt(m) - ship.length + i][index].color = true;
                                    test2[parseInt(m) - ship2.length + i][index2].ship = true;
                                    test2[parseInt(m) - ship2.length + i][index2]["giveColor"] = true; 
                                    // state = deactivateBoard(state, null)
                            }
                        }
                    }
                   
                }
              

   

            state = deactivateBoard2(state, {index2: state.ship2.id})
      

       console.log(state.active2, 'active 2****************')
      
       

       
        
    // console.log(square2, 'after ****', state.squares2[x2])
    // console.log(state, 'kekkekekeke')

    const newState = {
        ...state,
        squares2: test2,
        index2: index2 //so that i can pass it to pieces container
        // state.squares[x].indexOf()
      }

      console.log(newState, 'kekkekekeke')


      return {
        ...state,
        squares2: test2,
        index2: index2 //so that i can pass it to pieces container
        // state.squares[x].indexOf()
      }
    case P1ATTACK:
  
    // if(stateCopy.isPlaying){
    //     stateCopy.activeP1 = true
       

    // }
       if(stateCopy.activeP1){
         
        const a = action.key.slice(0, 1)
        const b = action.key.slice(1, 2)
        const attackSquare1 = stateCopy.squares2[a].find(square => square.key === `${a}${b}`)
        attackSquare1.color = true;
        console.log(attackSquare1.ship, "attack ship!!!")
            
     
            stateCopy.activeP1 = false
            stateCopy.activeP2 = true
        
     
        if(attackSquare1.ship){
            stateCopy.p2total --
        }
      }
     

    return stateCopy
    
    case P2ATTACK:
    console.log('its clucked!!!')
      if(stateCopy.activeP2){
        const o = action.key.slice(0, 1)
        const p = action.key.slice(1, 2)
        const attackSquare2 = stateCopy.squares[o].find(square => square.key === `${o}${p}`)
        attackSquare2.color = true;
        stateCopy.activeP2 = false
        stateCopy.activeP1 = true;
        if(attackSquare2.ship){
            stateCopy.p1total --
        }
      }

      return stateCopy
    case ORIENTATION:
        let orientation = !stateCopy.isHorizontal
        console.log(orientation, 'orientation')
    return {
        ...stateCopy,
        isHorizontal: orientation
    }
    case ORIENTATION2:
    let orientation2 = !stateCopy.isHorizontal2
    console.log(orientation2, 'orientation2')
    return {
    ...stateCopy,
    isHorizontal2: orientation2
    }
    case ACTIVATE:
      console.log('wut is ship!!!!', action.payload)
      return {
        ...stateCopy,
        active: true,
        ship: action.payload //so that i can grab ship info and use it here or in board file
      }
      case ACTIVATE2:
      console.log('wut is ship!!!!', action.payload)
      return {
        ...stateCopy,
        active2: true,
        ship2: action.payload //so that i can grab ship info and use it here or in board file
      }
    case DEACTIVATE_BOARD:
        return {
            ...stateCopy,
            visibleLabel: false,
            active: false
        }
    case DEACTIVATE_BOARD2:
        return {
            ...stateCopy,
            visibleLabel2: false,
            active2: false
        }
    case DEACTIVATE_BUTTON:
        return {
            ...stateCopy,
            activeBtn: false,
            ship2: action.payload
        }
    case DEACTIVATE_BUTTON2:
        return {
            ...stateCopy,
            activeBtn2: false,
            ship2: action.payload
        }
    case FIREBASE:
      const gameId = keyGen(action.payload)
      stateCopy.gameId = gameId
      return stateCopy
    case UPDATE_STATE:
        const newGameData = action.game
        return newGameData
    default:
      return stateCopy
  }
}

export default boardReducer
