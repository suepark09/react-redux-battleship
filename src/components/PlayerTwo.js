import React, { Component } from 'react'
import { fetchGameData, listenGameData } from '../firebaseFunc'
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
    fetchGameData(gameId)
      .then((data)=>{
        this.props.updateState(data.val()[gameId])
      })
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
