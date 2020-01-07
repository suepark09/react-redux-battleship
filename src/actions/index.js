import {
  SHIPHIT,
  FIREBASE
} from './actionTypes'

const clickedShip = (enemy, enemyShip) => {
    return {
        type: SHIPHIT,
        payload: {
            enemy,
            enemyShip
        }
    }
}

const firebaseAction = () => {
  return {
    type: FIREBASE,
  }
}

export { clickSquare, firebaseAction }