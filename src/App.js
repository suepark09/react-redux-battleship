import React from 'react'
import Board from './components/Board'
import Chat from './components/Chat'
import PiecesContainer from './components/PiecesContainer'
import Instructions from './components/Instructions'
import PlayerTwo from './components/PlayerTwo'
import Board2 from './components/Board2'

//import * as firebase from 'firebase/app'
import 'firebase/database'
//import { incrementUser } from './firebaseFunc'
//import firebaseConfig from './firebaseConfig'
import { connect } from 'react-redux'
import './App.css'
import { FIREBASE } from './actions/actionTypes'
import StartModal from './components/StartModal'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// import io from 'socket.io-client'
// import Container from 'react-bootstrap/Container'



class App extends React.Component {

  componentDidMount () {
    // firebase.initializeApp(firebaseConfig)
    // incrementUser()
    // this.props.firebaseAction(this.props.state.squares)
  }

  render () {
    const { squares } = this.props.state

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
                    <div className="start-btn-container">
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
    firebaseAction: (gameState) => dispatch({ type: FIREBASE, payload: gameState })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
