import React, { Component } from 'react'
import { fetchGameData, listenGameData } from '../firebaseFunc'
import { connect } from 'react-redux';
import PlayerTwoOpponent from './PlayerTwoOpponent'
import PlayerTwoOwn from './PlayerTwoOwn'
import Chat from './Chat'
import P1counter from './P1counter'
import { UPDATE_STATE } from '../actions/actionTypes'
import 'firebase/database'
import '../App.css'

import P2PiecesContainer from './P2PiecesContainer'

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
    const { squares } = this.props.state
    const placedShips = squares.activeBtn2
    let shipCounter = 0
    for (let i = 0; i<= placedShips.length; i++) {
      if (placedShips[i] === false) {
        console.log(`${shipCounter} SHIP PLACED`)
        shipCounter++
      }
    }

    return (
      <React.Fragment>
        <div className='d-flex app-container'>
          <div className='game-container'>
            <div className='title'>
              <h1> React-Redux <span style={{color: '#64B2F4'}}>Battleship</span></h1>
            </div>
            <div className='game-instructions-conatiner'>
            <div className={ shipCounter === 5 ? 'game-info-hidden': 'game-info' }>
                <P2PiecesContainer />
              </div>
              <div className={ shipCounter === 5 ? 'counter-container': 'counter-container-hidden' }>
                <P1counter counter={this.props.state.p2total}/>
              </div>

            <div className='game'>
                {/* <h5>Player Two</h5> */}

                <div className='game-board'>
                  <PlayerTwoOwn />
                </div>
            {/* <h5>Player One</h5> */}
            <div className='second-board'>
                  
                  <PlayerTwoOpponent />
                </div>
            </div>
          </div>
          </div>
        <Chat />
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
