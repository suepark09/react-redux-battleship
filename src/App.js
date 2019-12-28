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
import StartModal from './components/StartModal'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5000")

class App extends React.Component {
  constructor() {
    super()
    this.state = { msg: "", chat: [] }
  }

  onTextChange = e => {
    this.setState({ msg: e.target.value })
  }

  onMessageSubmit = () => {
    socket.emit('chat message', this.state.msg)
    this.setState({ msg: "" })
  }
  componentDidMount () {
    socket.on('chat message', ({ id, msg }) => {
      // Add new messages to existing messages in "chat"
      this.setState({
        chat: [...this.state.chat, { id, msg }]
      })
    })
    firebase.initializeApp(firebaseConfig)
    incrementUser()
    this.props.firebaseAction(this.props.state.squares)
  }

  renderChat() {
    const { chat } = this.state
    return chat.map(({ id, msg }, idx) => (
      <div key={idx}>
        <span style={{ color: "green" }}>{id}:</span>
        <span>{msg}</span>
      </div>
    ))
  }

  render () {
    const { squares } = this.props.state

    return (
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
        <div className='instructions'>
          <Instructions />
        </div>
        <div>
          <input onChange={e => this.onTextChange(e)} value={this.state.msg} />
          <button onClick={this.onMessageSubmit}>Send</button>
          <div>{this.renderChat()}</div>
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
