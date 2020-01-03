import React from 'react'
import io from 'socket.io-client'
import '../App.css'

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

    //   validateInput = () => {
    //       const nicknameInput = document.getElementById("nickname-input").value;
    //       if (nicknameInput == "") {
    //           alert('nothing here!')
    //       }
    //   }

      onTextChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      onMessageSubmit = () => {
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

      scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      
      componentDidMount() {
        this.scrollToBottom();
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }
    

    render() {

        return (
            <div className='text-center chat-container'>
            {/* <form> */}
              <div className='chat'>
              <div className='name-container'>
                  
                  <div>
                    <h5 className="nickname-title">Create nickname to chat!</h5>
                <input 
                  id="nickname-input"
                  placeholder="  Create nickname"
                  name="nickname"
                  onChange={e => this.onTextChange(e)}
                  value={this.state.nickname}
                required/>
                  </div>
              </div>
              <div className='text-left chat-text'>
                  {this.renderChat()}
                  <div style={{ float:"left", border: "red 1px solid"}}
             ref={(el) => { this.messagesEnd = el; }}>
            </div>
            </div>

         

              <div className= "chat-message-container">
                <div>
                <input id="message-input"
                  name="msg"
                  placeholder="  Send a message"
                  onChange={e => this.onTextChange(e)} 
                  value={this.state.msg} 
                required/>
                <button id="send-msg-btn" onClick={this.onMessageSubmit}>Send</button>
                </div>
                
              </div>
              
              </div>
              {/* </form> */}
            </div>
        )
    }
}

export default Chat