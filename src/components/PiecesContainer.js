import React from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
class PiecesContainer extends React.Component {
 handleSelection = (e) => {
    console.log('you clicked:', e.target.value)
    this.props.activate()
    // 
    // once you click on the radio button, it will change the 
    // initial state to an empty string
    // access button from inside square and pass props
  }
  render () {
    return (
        <div>
          <h1>Pieces</h1>
          <Form>
            <div key='inline-radio' className='mb-3'>
              <Form.Check inline name='ship' type='radio' label='1' value='1' onClick={this.handleSelection} />
              <Form.Check inline name='ship' type='radio' label='2' value='2' onClick={this.handleSelection} />
              <Form.Check inline name='ship' type='radio' label='3' value='3' onClick={this.handleSelection} />
              <Form.Check inline name='ship' type='radio' label='4' value='4' onClick={this.handleSelection} />
            </div>
          </Form>
        </div>
      )
  }
  
}

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = dispatch => {
    return {
        activate: () => dispatch({type: 'ACTIVATE' })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PiecesContainer)
