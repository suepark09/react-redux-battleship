import React from 'react'
import io from 'socket.io-client'
import '../App.css'
import TurnDisplay from './TurnDisplay'

const socket = io.connect("http://localhost:5000")

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
          <div class="chat-body">
          <div key={idx}>
            <span style={{ color: "#f6ff54" }}>{nickname}:</span>
            <span> {msg}</span>
          </div>
          </div>
        ))
      }
    

    render() {
      return (
        <div className='text-center chat-container'>
          <div className='chat'>
              <div className='turn-display'>
                <TurnDisplay/>
              </div>
              <div className='name-container'>
                <div>
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
              <div className='text-left chat-text'>{this.renderChat()}</div>
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