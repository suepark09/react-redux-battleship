import {
  SHIPHIT,
  CLICKED,
  FIREBASE

} from './actionTypes'

// export const SHIP_LENGTHS = {
//     'Arial Ship': 2,
//     'Battleship': 4
// }

// const clickSquare = (coordinate) => {
//   console.log('clicked')
//   return {
//     type: CLICKED,
//     payload: coordinate
//   }
// }
// export { clickSquare }

const clickedShip = (enemy, enemyShip) => {
    return {
        type: SHIPHIT,
        payload: {
            enemy,
            enemyShip
        }
    }
}

// export const hitShip = (enemy, enemyShip) => {
//     return {
//         type: HIT_SHIP,
//         payload: {
//             enemy,
//             enemyShip
//         }
//     }
// }

// export const PLAYER1ATTACK = (coordinates) => {
//     return(dispatch) => {
//         dispatch({
//             type: PLAYER_1_ATTACK,
//             payload: coordinates
//         });
//         dispatch(setIsPlaying(false))
//     }
// }

const firebaseAction = () => {
  console.log('firebase action')
  return {
    type: FIREBASE,
  }
}

export { clickSquare, firebaseAction }