import React from 'react'
import Form from 'react-bootstrap/Form';
export default function PiecesContainer () {
    const handleSelection = (e) => {
        console.log('you clicked:', e.target.value)
    }
    return (
        <div>
            <h1>Pieces</h1>
            <Form>
                <div key="inline-radio" className="mb-3">
                    <Form.Check inline name="ship" type="radio" label="1" value="1" onClick={handleSelection} />
                    <Form.Check inline name="ship" type="radio" label="2" value="2" onClick={handleSelection} />
                    <Form.Check inline name="ship" type="radio" label="3" value="3" onClick={handleSelection} />
                    <Form.Check inline name="ship" type="radio" label="4" value="4" onClick={handleSelection} />
                </div>
            </Form>
        </div>
    )
}
