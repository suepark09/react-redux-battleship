import React from 'react'
import Form from 'react-bootstrap/Form'
export default function PiecesContainer () {
  const handleSelection = (e) => {
    console.log('you clicked:', e.target.value)
  }
  return (
    <div>
      <h1>Your Ships</h1>
      <Form>
        <div key='inline-radio' className='mb-3'>
          <Form.Check inline name='ship' type='radio' label='2' value='2' onClick={handleSelection} />
          <Form.Check inline name='ship' type='radio' label='3' value='3' onClick={handleSelection} />
          <Form.Check inline name='ship' type='radio' label='3' value='3' onClick={handleSelection} />
          <Form.Check inline name='ship' type='radio' label='4' value='4' onClick={handleSelection} />
          <Form.Check inline name='ship' type='radio' label='5' value='5' onClick={handleSelection} />
        </div>
      </Form>
      <h1>Orientation</h1>
        <button className='selector'>Horizontal</button>
        <button className='selector'>Vertical</button>
    </div>
  )
}
