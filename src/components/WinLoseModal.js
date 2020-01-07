import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function WinLoseModal (props) {
  const [modal, setModal] = useState(true)
  const modalBool = true

  let title = ''
  let body = ''
  let test = false

  const toggle = () => {
    setModal(!modal)
  }

  if (!props.winner === 0) {
  } else if (props.winner === 1) {
    if (props.player === 1) {
      title = 'You won!'
      body = 'You destroyed all your opponent\'s ships!'
      test = true
    } else {
      title = 'You lost!'
      body = 'Your opponent destroyed all your ships!'
      test = true
    }
  } else if ((props.winner === 2)) {
    if (props.player === 2) {
      title = 'You won!'
      body = 'You destroyed all your opponent\'s ships!'
      test = true
    } else {
      title = 'You lost!'
      body = 'Your opponent destroyed all your ships!'
      test = true
    }
  }

  return (
    <>
      <Modal isOpen={props.winner > 0 ? modal : test} toggle={toggle} backdrop={modalBool} centered={modalBool} autoFocus={modalBool}>
        <ModalHeader className='modal-header' toggle={toggle}>
          <p className='title-ready'>{title}</p>
        </ModalHeader>
        <ModalBody className='modal-style'>
          <p>{body}</p>
        </ModalBody>
        <ModalFooter className='modal-style'>
          <Button href={window.location.origin}>New Game</Button>
          <Button id='delete-btn' onClick={() => toggle()}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
