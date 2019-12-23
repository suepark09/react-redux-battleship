import * as firebase from "firebase/app";
import 'firebase/database'

// incrementUser is a useless function in this app, just here to make sure it's connected to the database
export function incrementUser () {
    const ref = firebase.database().ref('/')
    ref.once('value')
      .then(function (snapshot) {
        const currentUser = snapshot.val().user
        firebase.database().ref('/').update({
          user: currentUser + 1
        })
      })
  }