import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function StartModal (props) {
  console.log('modal props', props.props)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const backdrop = true

  return (
    <div>
      <Button color='danger' onClick={toggle}>START</Button>
      <Modal isOpen={modal} toggle={toggle} backdrop={backdrop} centered={backdrop} autoFocus={backdrop}>
        <ModalHeader toggle={toggle}>Ready?</ModalHeader>
        <ModalBody>
                Connect with your opponent by sharing this link: www.sample.com/{props.props.gameId}
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>Copy Link</Button>{' '}
          <Button color='secondary' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
