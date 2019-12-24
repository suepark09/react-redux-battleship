import {
  CLICKED,
  FIREBASE
} from './actionTypes'

const clickSquare = (coordinate) => {
  console.log('clicked')
  return {
    type: CLICKED,
    payload: coordinate
  }
}

const firebaseAction = () => {
  console.log('firebase action')
  return {
    type: FIREBASE,
  }
}

export { clickSquare, firebaseAction }