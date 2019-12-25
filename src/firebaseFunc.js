import * as firebase from 'firebase/app'
import 'firebase/database'

// incrementUser is a useless function in this app, just here to make sure it's connected to the database
export function incrementUser () {
  const ref = firebase.database().ref('/')
  ref.once('value')
    .then(function (snap) {
      const currentUser = snap.val().user
      firebase.database().ref('/').update({
        user: currentUser + 1
      })
    })
}

export function keyGen (state) {
  const ref = firebase.database().ref('/')
  // get a key for a new game
  const gameId = ref.push().key
  console.log('FIREBASE FUNC GAME ID:', gameId)
  firebase.database().ref('/' + gameId).update(state)
  return gameId
}