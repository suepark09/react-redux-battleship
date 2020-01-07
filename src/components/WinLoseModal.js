import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function WinLoseModal() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        console.log('toggle modal')
        setModal(!modal)
    }

    return (
        <React.Fragment>
            <Modal isOpen={ toggleModal } toggle={ toggleModal } backdrop='true' centered='true'  autoFocus='true'>
                <ModalHeader className="modal-header" toggle={ toggleModal }>
                    <h2 className="title-ready">Ready?</h2>
                </ModalHeader>
                <ModalBody className="modal-style">
                    <p>YOU EITHER WON OR LOST, IDK</p>
                </ModalBody>
                <ModalFooter className="modal-style">
                    <Button id='delete-btn' onClick={ toggleModal }>Close</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}
