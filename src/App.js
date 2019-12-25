import React from 'react'
import Board from './components/Board'
import PiecesContainer from './components/PiecesContainer'
import Instructions from './components/Instructions'
import * as firebase from 'firebase/app'
import 'firebase/database'
import { incrementUser } from './firebaseFunc'
import firebaseConfig from './firebaseConfig'
import { connect } from 'react-redux'
import './App.css'
import { FIREBASE } from './actions/actionTypes'

// connect App to store, save the game state to database on game start
class App extends React.Component {

  componentDidMount () {
    firebase.initializeApp(firebaseConfig)
    incrementUser()
    console.log('will mount')
    this.props.firebaseAction(this.props.state)
  }

  render () {
    return (
      <div>
        <h1>React-Redux-Battleship Game</h1>
        <div className='game'>
          <div className='game-info'>
            <PiecesContainer />
          </div>
          <div className='game-board'>
            <Board />
          </div>
        </div>
        <div className='instructions'>
          <Instructions />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapped state in props')
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    firebaseAction: (state) => dispatch({ type: FIREBASE, payload: state })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
