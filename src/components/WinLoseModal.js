import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function WinLoseModal(props) {
    console.log('DID YOU WIN???', props)

    const [modal, setModal] = useState(false)
    const modalBool = true

    const toggle = () => {
        console.log('toggle modal')
        setModal(!modal)
    }

    let title = ''
    let body = ''
    let test = false

    if (props.winner === 0) {
        console.log('nothing')
    } else if (props.winner === 1) {
        if (props.player === 1) {
            title = 'You won!'
            body = `You destroyed all your opponent's ships!`
            test = true
        } else {
            title = 'You lost!'
            body = `Your opponent destroyed all your ships!`
            test = true
        }
    } else if ((props.winner === 2)) {
        if (props.player === 2) {
            title = 'You won!'
            body = `You destroyed all your opponent's ships!`
            test = true
        } else {
            title = 'You lost!'
            body = `Your opponent destroyed all your ships!`
            test = true
        }
    }

    return (
        <React.Fragment>
            <Modal isOpen={ test } toggle={ toggle } backdrop={ modalBool } centered={ modalBool }  autoFocus={ modalBool }>
                <ModalHeader className="modal-header" toggle={ toggle }>
                    <h2 className="title-ready">{ title }</h2>
                </ModalHeader>
                <ModalBody className="modal-style">
                    <p>{ body }</p>
                </ModalBody>
                <ModalFooter className="modal-style">
                    <Button id='delete-btn' onClick={ toggle }>Close</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}
