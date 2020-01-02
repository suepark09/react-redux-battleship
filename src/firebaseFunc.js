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

// export function fetchGameData (gameId) {
//   console.log('FINDING GAME ON DATABASE WITH ID:', gameId)
//   gameRef.orderByKey().equalTo(gameId).on('value', function (snap) {
//     console.log('DATABASE QUERY RESULT', snap.val()[gameId])
//     return snap.val()[gameId]
//   })
// }

export function fetchGameData (gameId) {
  console.log('FINDING GAME ON DATABASE WITH ID:', gameId)
  return gameRef.orderByKey().equalTo(gameId).once('value')
}

export function listenGameData (gameId) {
  gameRef.orderByKey().equalTo(gameId).on('child_changed', function (snap) {
    console.log(snap.val())
    return snap.val()
  })
}

// to clear database...
// firebase.database().ref().remove()
