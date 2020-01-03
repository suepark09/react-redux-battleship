import React, { Component } from 'react'
import { fetchGameData, listenGameData } from '../firebaseFunc'
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

  changeSnapValue (gameId, snapVal) {
    console.log('changeSnapValue:', gameId, snapVal)
  }

  componentDidUpdate (prevState) {
    const { gameId } = this.props.match.params
    console.log('COMPARING PREVIOUS STATE',prevState.state.squares)
    console.log('TO GLOBAL STATE',this.props.state.squares)
    const changeSnapValueBoundToMe = this.changeSnapValue.bind(this)
    console.log('TO NEWEST STATE',listenGameData(gameId, changeSnapValueBoundToMe))


    // console.log('TO NEWEST STATE',listenGameData(gameId, function(gameId, snapVal) {
    //   console.log('i am being called when snap value changes', gameId, snapVal)
    // }))

    if (this.props.state.squares !== prevState) {
      console.log('GLOBAL STATE DOES NOT EQUAL PREVIOUS STATE')
    }
  }

  // componentDidMount () {
  //   const { gameId } = this.props.match.params
  //   console.log('FETCHING DATA',fetchGameData(gameId))
  //   fetchGameData(gameId)
  //     .then((data) =>{
  //       const gameData = data.val()[gameId]
  //       this.props.updateState(gameData)
  //     })
  //     .catch((error) => console.error('Error fetching game data:', error))
  // }

  // componentDidUpdate (prevState) {
  //   console.log('inside the did update lifecycle', prevState)
  //   if (this.props.state !== prevState) {
  //     const { gameId } = this.props.match.params
  //     fetchGameData(gameId)
  //     .then((data) =>{
  //       const gameData = data.val()[gameId]
  //       this.props.updateState(gameData)
  //     })
  //     .catch((error) => console.error('Error fetching game data:', error))
  // }
  // }

  render () {
    return (
      <React.Fragment>
        {/* <div className='game-board'>
          <PlayerTwoOpponent />
        </div> */}
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
