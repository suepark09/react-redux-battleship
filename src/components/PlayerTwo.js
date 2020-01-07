import React, { Component } from 'react'
import { fetchGameData, listenGameData } from '../firebaseFunc'
import { connect } from 'react-redux';
import PlayerTwoOpponent from './PlayerTwoOpponent'
import WinLoseModal from './WinLoseModal'
import PlayerTwoOwn from './PlayerTwoOwn'
import Chat from './Chat'
import P2counter from './P2counter'
import { UPDATE_STATE } from '../actions/actionTypes'
import 'firebase/database'
import '../App.css'

import P2PiecesContainer from './P2PiecesContainer'
import {updatePlayer2Data} from '../firebaseFunc'

class PlayerTwo extends Component {
  state = {winner: 0}

  updateToDbState (gameId, snapVal) {
    console.log('SOMETHING IN DATABASE CHANGED:', gameId, snapVal)
    this.props.updateState(snapVal)
  }

  componentDidUpdate () {
    const { gameId } = this.props.match.params
    if (gameId) {
      const updateToDbStateBoundToMe = this.updateToDbState.bind(this)
      listenGameData(gameId, updateToDbStateBoundToMe)
    }

  }

  componentDidMount () {
    const { gameId } = this.props.match.params
    fetchGameData(gameId)
      .then((data)=>{
        console.log('the then promise!!!!!!!!!!!!!!!!!!!!!!!!!!')
        this.props.updateState(data.val()[gameId])
      })
    //   if (gameId) {
    //     const updateToDbStateBoundToMe = this.updateToDbState.bind(this)
    //     listenGameData(gameId, updateToDbStateBoundToMe)
    //   }
  }

  startGame = () => {
    console.log('startgame', this.props.state.squares.player2Ready)
        if (this.props.state.squares.player2Ready) {
            console.log('sending p2 stuff')
            updatePlayer2Data(this.props.state.squares.gameId, this.props.state.squares)
        }
  }

  render () {
    let winner = 0
    if (this.props.state.squares.p2total === 0) {
      console.log('player one wins!!!!')
        winner = 1
    } else if (this.props.state.squares.p1total === 0){
      console.log('player two wins!!!!')
        winner = 2
    }
    return (
      <React.Fragment>
        <WinLoseModal winner={ winner } player={2} />
        <div className='d-flex app-container'>
          <div className='game-container'>
            <div className='title'>
              <h1> React-Redux <span style={{color: '#64B2F4'}}>Battleship</span></h1>
            </div>
            <div className='game-instructions-conatiner'>
            <div className={ this.props.state.squares.player2Ready ? 'game-info-hidden': 'game-info' }>
                <P2PiecesContainer />
              </div>
              <div className={ this.props.state.squares.player2Ready ? 'counter-container': 'counter-container-hidden' }>
                <P2counter counter={this.props.state.p2total}/>
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
        <Chat player={2}/>
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
