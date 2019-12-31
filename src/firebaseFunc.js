import * as firebase from 'firebase/app'
import 'firebase/database'

const rootRef = firebase.database().ref('/')
const gameRef = firebase.database().ref('/game')

// incrementUser is a useless function in this app, just here to make sure it's connected to the database
export function incrementUser () {
  rootRef.once('value')
    .then(function (snap) {
      const currentUser = snap.val().user
      firebase.database().ref('/').update({ user: currentUser + 1 })
    })
}

export function keyGen (state) {
  // get a key for a new game
  const gameId = gameRef.push().key
  state.gameId = gameId
  gameRef.child(gameId).update(state)
  return gameId
}

export function fetchGameData (gameId) {
  console.log('finding game on database with this id:', gameId)
  const gameResult = gameRef.orderByKey().equalTo(gameId)
  console.log('found this game', gameResult)
  return
}

// to clear database...
// firebase.database().ref().remove()
