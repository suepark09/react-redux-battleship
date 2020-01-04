import React from 'react'
import Board from './components/Board'
import Chat from './components/Chat'
import PiecesContainer from './components/PiecesContainer'
import Instructions from './components/Instructions'
import PlayerTwo from './components/PlayerTwo'
import Board2 from './components/Board2'
import { UPDATE_STATE } from './actions/actionTypes'
import { listenGameData } from './firebaseFunc'
// import TurnDisplay from './components/TurnDisplay'
import { connect } from 'react-redux'
import './App.css'
import { FIREBASE } from './actions/actionTypes'
import StartModal from './components/StartModal'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends React.Component {

  updateToDbState (gameId, snapVal) {
    console.log('updateToDbState:', gameId, snapVal)
    this.props.updateState(snapVal)
  }

  componentDidMount () {
    const gameId = this.props.state.squares.gameId
    if (gameId) {
      const updateToDbStateBoundToMe = this.updateToDbState.bind(this)
      listenGameData(gameId, updateToDbStateBoundToMe)
    }
  }

  render () {
    const { squares } = this.props.state
    const placedShips = this.props.state.squares.activeBtn
    let shipCounter = 0
    for (let i = 0; i<= placedShips.length; i++) {
      if (placedShips[i] === false) {
        console.log(`${shipCounter} SHIP PLACED`)
        shipCounter++
      }
    }

    return (
    <Router>
      <Switch>
      <Route exact path='/'>
      <React.Fragment>
        <div className='d-flex app-container'>   
          <div className= 'game-container'>
            <div className="title"><h1> React-Redux <span style={{color: "#64B2F4"}}>Battleship</span></h1></div>
              <div className="game-instructions-container">
                <div className='game-info'>
                    <PiecesContainer />
                  </div>
                <div className='game'>
                  <div className='game-board'>
                    <Board />
                  </div>
                  <div className='second-board'>
                      <Board2 />
                  </div>
                  <div className='instructions-container'>
                    <div className="instructions">
                      <Instructions />
                    </div>
                    <div className={ shipCounter === 5 ? 'start-btn-container': 'start-btn-container-closed' }>
                      <StartModal props={squares} />
                    </div>
                  </div>
                </div>
              </div>
              </div>
            <Chat />
        </div>
      </React.Fragment>
      </Route>
      <Route path='/game/:gameId' component={PlayerTwo} />
      </Switch>
    </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    firebaseAction: (gameState) => dispatch({ type: FIREBASE, payload: gameState }),
    updateState: (gameData) => dispatch({ type: UPDATE_STATE, game: gameData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
