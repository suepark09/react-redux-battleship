import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function WinLoseModal() {

    const [modal, setModal] = useState(true)
    const modalBool = true

    const toggle = () => {
        console.log('toggle modal')
        setModal(!modal)
    }

    const title = 'TITLE TEXT'

    const body = 'BODY TEXT'

    return (
        <React.Fragment>
            <Modal isOpen={ modal } toggle={ toggle } backdrop={ modalBool } centered={ modalBool }  autoFocus={ modalBool }>
                <ModalHeader className="modal-header" toggle={ toggle }>
                    <h2 className="title-ready">{ title }</h2>
                </ModalHeader>
                <ModalBody className="modal-style">
                    <p>{ body }</p>
                </ModalBody>
                <ModalFooter className="modal-style">
                    <Button onClick={ toggle }>Start New Game</Button>
                    <Button id='delete-btn' onClick={ toggle }>Close</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}
