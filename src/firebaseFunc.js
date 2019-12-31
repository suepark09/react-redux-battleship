import * as firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

// const rootRef = firebase.database().ref('/')
// const gameRef = firebase.database().ref('/game')

// incrementUser is a useless function in this app, just here to make sure it's connected to the database
export function incrementUser () {
  firebase.database().ref('/').once('value')
    .then(function (snap) {
      const currentUser = snap.val().user
      firebase.database().ref('/').update({ user: currentUser + 1 })
    })
}

export function keyGen (state) {
  // get a key for a new game
  console.log('SAVING THIS STATE TO DATABASE', state)
  const gameId = firebase.database().ref('/game').push().key
  state.gameId = gameId
  firebase.database().ref('/game').child(gameId).update(state)
  return gameId
}

export function fetchGameData (gameId) {
  console.log('finding game on database with this id:', gameId)
  const gameResult = firebase.database().ref('/game').orderByKey().equalTo(gameId).on('value', function (snap) {
    console.log('found this game', snap.val())
  })
  return gameResult
}

// to clear database...
// firebase.database().ref().remove()
