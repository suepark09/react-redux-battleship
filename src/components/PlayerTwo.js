import React, { Component } from 'react'
import { fetchGameData } from '../firebaseFunc'
import { connect } from 'react-redux';
import PlayerTwoOpponent from './PlayerTwoOpponent'
import { UPDATE_STATE } from '../actions/actionTypes'
import 'firebase/database'

class PlayerTwo extends Component {
  componentDidMount () {
    const { gameId } = this.props.match.params
    fetchGameData(gameId)
      .then((data) =>{
        const gameData = data.val()[gameId]
        this.props.updateState(gameData)
      })
      .catch((error) => console.error('Error fetching game data:', error))
  }

  componentDidUpdate (revProps, prevState, snapshot) {
    console.log('inside the did update lifecycle', prevState)
    if (this.props.state !== prevState) {
      const { gameId } = this.props.match.params
      fetchGameData(gameId)
      .then((data) =>{
        const gameData = data.val()[gameId]
        this.props.updateState(gameData)
      })
      .catch((error) => console.error('Error fetching game data:', error))
  }
  }

  render () {
    return (
      <div>
        <h1>PLAYER TWO BOARD!!!</h1>
        <PlayerTwoOpponent />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
      updateState: (gameData) => dispatch({ type: UPDATE_STATE, game: gameData })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerTwo)
