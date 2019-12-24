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

// saves a copy of the state on the database
export function saveState (state) {
  const ref = firebase.database().ref('/')
  ref.push(state)
}
