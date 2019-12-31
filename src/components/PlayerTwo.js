import React, { Component } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/database'
import { fetchGameData } from '../firebaseFunc'
import firebaseConfig from '../firebaseConfig'

export default class PlayerTwo extends Component {
  componentDidMount () {
    firebase.initializeApp(firebaseConfig)
    const { gameId } = this.props.match.params
    console.log('PARAMS FOR PLAYER TWO:', gameId)
    fetchGameData(gameId)
  }

  render () {
    return (
      <div>
        <h1>PLAYER TWO BOARD!!!</h1>
      </div>
    )
  }
}
