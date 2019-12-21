import React from 'react'
import Form from 'react-bootstrap/Form';

export default function PiecesContainer () {
    return (
        <div>
            <h1>Pieces</h1>
            <Form>
                {['radio'].map(type => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline name="ship" label="1" type={type} id={`inline-${type}-1`} />
                    <Form.Check inline name="ship" label="2" type={type} id={`inline-${type}-2`} />
                    </div>
                ))}
            </Form>
        </div>
    )
}
