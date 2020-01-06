import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { FIREBASE } from '../actions/actionTypes'
import { connect } from 'react-redux'

function StartModal (props) {
  const url = window.location.href
  const backdrop = true
  const [modal, setModal] = useState(false)
  const [link, setLink] = useState('')
  const [displayBtn, setDisplayBtn] = useState('start-modal-btn')

  const toggle = () => {
    setModal(!modal)
  }

  const handleStartGame = () => {
    setModal(!modal)
    props.createGameInstance(props.state.squares)
    const gameLink = url + 'game/' + props.props.gameId
    setLink(gameLink)
    setDisplayBtn('start-modal-btn-hidden')
  }

  const handleCopyLink = () => {
    const copyBtn = document.getElementById('copyBtn')
    var dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.value = url + 'game/' + props.props.gameId
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
    copyBtn.innerHTML = 'Copied!'
  }

  return (
    <div>
    <h5>{ link }</h5>
    <Button id={ displayBtn } onClick={ ()=> handleStartGame() }>Start Game</Button>
      <Modal isOpen={modal} toggle={toggle} backdrop={backdrop} centered={backdrop} autoFocus={backdrop}>
        <ModalHeader className="modal-header" toggle={toggle}><h2 className="title-ready">Ready?</h2></ModalHeader>
        <ModalBody className="modal-style">
          Connect with your opponent by sharing this link: <span style={{color: '#5da6e3'}}>{link}</span>
        </ModalBody>
        <ModalFooter className="modal-style">
          <Button id='copyBtn' onClick={ handleCopyLink }>Copy Link</Button>{' '}
          <Button id='delete-btn' onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createGameInstance: (gameState) => dispatch({ type: FIREBASE, payload: gameState })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartModal)