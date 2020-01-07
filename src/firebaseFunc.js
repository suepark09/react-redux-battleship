import * as firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

const rootRef = firebase.database().ref('/')
const gameRef = firebase.database().ref('/game')

export function incrementUser () {
  rootRef.once('value')
    .then(function (snap) {
      const currentUser = snap.val().user
      rootRef.update({ user: currentUser + 1 })
    })
}

export function keyGen (state) {
  const gameId = gameRef.push().key
  state.gameId = gameId
  gameRef.child(gameId).update(state)
  return gameId
}

export function fetchGameData (gameId) {
  return gameRef.orderByKey().equalTo(gameId).once('value')
}

export function listenGameData (gameId, callbackFn) {
  gameRef.orderByKey().equalTo(gameId).on('child_changed', snap => callbackFn(gameId, snap.val()))
}

export function updateGameData (gameId) {
  return gameRef.child(gameId).update({ isPlaying: true })
}

export function player1Turn (gameId) {
  return gameRef.child(gameId).update({ isPlaying: false })
}

export function updatePlayer2Data (gameId, state) {
  return gameRef.child(gameId).update({...state})
}
