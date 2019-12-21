
import {
    HIT_SHIP,
    PLAYER_1_ATTACK,
    PLAYER_2_ATTACK,
    SET_IS_PLAYING,
    SELECT_SHIP,
    SET_SHIP,
    CLICKED
    
} from './actionTypes'

// export const SHIP_LENGTHS = {
//     'Arial Ship': 2,
//     'Battleship': 4
// }

const clickSquare = (coordinate) => {

    return {
         type: CLICKED,
         payload: coordinate
        }
    }
export { clickSquare }

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

// export function setIsPlaying(isPlaying) {
//     return { type: SET_IS_PLAYING, payload: isPlaying };
// };

// export const PLAYER2ATTACK = (coordinates) => {
//     return(dispatch) => {
//         dispatch({
//             type: PLAYER_2_ATTACK,
//             payload: coordinates
//         });
//         dispatch(setIsPlaying(false))
//     }
// }

// export function selectShip(ship) {
//     return { type: SELECT_SHIP, payload: ship };
//   };
  
//   export function setShip(player, shipName, coordinates)  {
//     return {
//       type: SET_SHIP,
//       payload: {
//         player,
//         shipName,
//         coordinates,
//       }
//     };
//   };


