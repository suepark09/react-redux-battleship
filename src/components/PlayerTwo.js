import React, { Component } from 'react'
import { listenGameData } from '../firebaseFunc'
import { connect } from 'react-redux';
import PlayerTwoOpponent from './PlayerTwoOpponent'
import PlayerTwoOwn from './PlayerTwoOwn'
import { UPDATE_STATE } from '../actions/actionTypes'
import 'firebase/database'

class PlayerTwo extends Component {

  updateToDbState (gameId, snapVal) {
    console.log('SOMETHING IN DATABASE CHANGED:', gameId, snapVal)
    this.props.updateState(snapVal)
  }

  componentDidMount () {
    const { gameId } = this.props.match.params
    // fetchGameData(gameId)
    //   .then((data) =>{
    //     const gameData = data.val()[gameId]
    //     this.props.updateState(gameData)
    //   })
    //   .catch((error) => console.error('Error fetching game data:', error))
    if (gameId) {
      const updateToDbStateBoundToMe = this.updateToDbState.bind(this)
      listenGameData(gameId, updateToDbStateBoundToMe)
    }
  }

  render () {
    return (
      <React.Fragment>
        <h5>Player Two</h5>
        <div className='game-board'>
          <PlayerTwoOwn />
        </div>
        <h5>Player One</h5>
        <div className='game-board'>
          <PlayerTwoOpponent />
        </div>
      </React.Fragment>
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
