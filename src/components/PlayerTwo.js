import React, { Component } from 'react'
import { fetchGameData } from '../firebaseFunc'
import PlayerTwoOpponent from './PlayerTwoOpponent'
import 'firebase/database'

export default class PlayerTwo extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount () {
    const { gameId } = this.props.match.params
    console.log('PARAMS FOR PLAYER TWO:', gameId)
    fetchGameData(gameId)
      .then((data) =>{
        console.log('RETURNED FROM QUERY:', data.val()[gameId])
        this.setState(data.val()[gameId])
      })
      .catch((error) => console.error('Error fetching game data:', error))
  }

  render () {
    return (
      <div>
        <h1>PLAYER TWO BOARD!!!</h1>
        <PlayerTwoOpponent gameData={ this.state } />
      </div>
    )
  }
}
