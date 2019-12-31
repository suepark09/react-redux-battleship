import React from 'react'
import Board from './components/Board'
import Chat from './components/Chat'
import PiecesContainer from './components/PiecesContainer'
import Instructions from './components/Instructions'
import * as firebase from 'firebase/app'
import 'firebase/database'
import { incrementUser } from './firebaseFunc'
import firebaseConfig from './firebaseConfig'
import { connect } from 'react-redux'
import './App.css'
import { FIREBASE } from './actions/actionTypes'
import StartModal from './components/StartModal'

import Container from 'react-bootstrap/Container'



class App extends React.Component {

  componentDidMount () {
   
    firebase.initializeApp(firebaseConfig)
    incrementUser()
    this.props.firebaseAction(this.props.state.squares)
  }

  render () {
    const { squares } = this.props.state

    return (
      <div>
        <div className='d-flex'>
            <div className='d-flex'>
              <div>
              <StartModal props={squares} />
                <h1>React-Redux-Battleship Game</h1>
                  <div className='game'>
                    <div className='game-info'>
                      <PiecesContainer />
                    </div>
                  <div className='game-board'>
                      <Board />
                  </div>
                  </div>
                </div>
                  <div className='instructions'>
                      <Instructions />
                  </div>
            </div>
            <Chat />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    firebaseAction: (gameState) => dispatch({ type: FIREBASE, payload: gameState })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
