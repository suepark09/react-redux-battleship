import React, { Component } from 'react'
import { fetchGameData } from '../firebaseFunc'

export default class PlayerTwo extends Component {
  componentDidMount () {
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
