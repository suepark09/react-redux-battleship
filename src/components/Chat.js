import React from 'react'
import io from 'socket.io-client'
import '../App.css'
import TurnDisplay from './TurnDisplay'
import ScrollableFeed from 'react-scrollable-feed'

const socket = io.connect('https://chat-server-dc.herokuapp.com/')

class Chat extends React.Component {
    constructor() {
        super()
        this.state = { msg: "", chat: [], nickname: "" }
      }

      componentDidMount () {
        socket.on('chat message', ({ nickname, msg }) => {
          // Add new messages to existing messages in "chat"
          this.setState({
            chat: [...this.state.chat, { nickname, msg }]
          })
        })
      }

      onTextChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      onMessageSubmit = (e) => {
        e.preventDefault()
        const { nickname, msg } = this.state
        socket.emit('chat message', { nickname, msg })
        this.setState({ msg: "" })
      }
    
      renderChat() {
        const { chat } = this.state
        return chat.map(({ nickname, msg }, idx) => (
          <div key={idx}>
            <span style={{ color: "#f6ff54" }}>{nickname}:</span>
            <span> {msg}</span>
          </div>
        ))
      }
    

    render() {
      return (
        <div className='text-center chat-container'>
          <div className='chat'>
              <div className='turn-display'>
                <TurnDisplay player={this.props.player}/>
              </div>
              <div className='name-container'>
                <div className='name-container2'>
                    <h5 className="nickname-title">Create nickname to chat!</h5>
                    <input 
                      id="nickname-input"
                      placeholder="  Create nickname"
                      name="nickname"
                      onChange={e => this.onTextChange(e)}
                      value={this.state.nickname}
                    />
                </div>
              </div>
              <div className='text-left chat-text'><ScrollableFeed forceScroll='true'>{this.renderChat()}</ScrollableFeed></div>
              <div className= "chat-message-container">
                <form>
                    <input 
                      id="message-input"
                      name="msg"
                      placeholder="  Send a message"
                      onChange={e => this.onTextChange(e)} 
                      value={this.state.msg} 
                    />
                    <button id="send-msg-btn" onClick={this.onMessageSubmit}>Send</button>
                </form>
              </div>
          </div>
        </div>
        )
    }
}

export default Chat