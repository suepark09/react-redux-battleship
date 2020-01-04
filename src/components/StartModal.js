import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { FIREBASE } from '../actions/actionTypes'
import { connect } from 'react-redux'

function StartModal (props) {
  const url = window.location.href
  const backdrop = true
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }

  const handleStartGame = () => {
    setModal(!modal)
    props.createGameInstance(props.state.squares)
    console.log('GAME STARTED')
  }

  const handleCopyLink = () => {
    console.log('copy link')
    const copyBtn = document.getElementById('copyBtn')
    var dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.value = window.location.href + 'game/' + props.props.gameId
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
    copyBtn.innerHTML = 'Copied!'
  }

  return (
    <div>
      <Button id="start-modal-btn" onClick={ ()=> handleStartGame() }>Start Game</Button>
      <Modal isOpen={modal} toggle={toggle} backdrop={backdrop} centered={backdrop} autoFocus={backdrop}>
        <ModalHeader toggle={toggle}>Ready?</ModalHeader>
        <ModalBody>
          Connect with your opponent by sharing this link: {url}game/{props.props.gameId}
        </ModalBody>
        <ModalFooter>
          <Button id='copyBtn' color='primary' onClick={ handleCopyLink }>Copy Link</Button>{' '}
          <Button color='secondary' onClick={toggle}>Cancel</Button>
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