import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function StartModal(props) {
    // conditional should check if there is already an exisitng game
    // if isPlaying is false, there should be a modal over the App
    // if isPlaying is true, then the App should be rendered
    console.log('modal props', props)

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const backdrop = true

    // const { squares } = this.props.state
    // const modal = squares.isPlaying
    // console.log('is the user playing?', modal)

    return (
        <div>
            <Button color="danger" onClick={toggle}>START</Button>
            <Modal isOpen={modal} toggle={toggle} backdrop={backdrop} centered={backdrop} autoFocus={backdrop}>
                <ModalHeader toggle={toggle}>Ready?</ModalHeader>
                <ModalBody>
                Connect with your opponent by sharing this link: www.sample.com/unique-game-key
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
