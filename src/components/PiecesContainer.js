import React from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
class PiecesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.ships = [
            {name: 'Aircraft Carrier', length: 5},
            {name: 'Battleship', length: 4},
            {name: 'Submarine', length: 3},
            {name: 'Destroyer', length: 3},
            {name: 'Patrol Boat', length: 2},
          ];
    }
 aircraftCarrier = (e) => {
    console.log('you clicked on aircraft carrier', e.target.value)
    //grab keys
    this.props.activate(this.ships[0])
  }

battleship = (e) => {
    console.log('you clicked on battleship', e.target.value)
    this.props.activate(this.ships[1])
  }

submarine = (e) => {
    console.log('you clicked on submarine', e.target.value)
    this.props.activate(this.ships[2])
}

destroyer = (e) => {
    console.log('you clicked on destroyer', e.target.value)
    this.props.activate(this.ships[3])
}

patrolBoat = (e) => {
    console.log('you clicked on patrol boat', e.target.value)
    this.props.activate(this.ships[4])
}

 render() {
    return (
        <div>
          <h1>Your Ships</h1>
          <Form>
            <div key='inline-radio' className='mb-3'>
              <Form.Check inline name='ship' type='radio' label='2' value='2' onClick={this.patrolBoat} />
              <Form.Check inline name='ship' type='radio' label='3' value='3' onClick={this.destroyer} />
              <Form.Check inline name='ship' type='radio' label='3' value='3' onClick={this.submarine} />
              <Form.Check inline name='ship' type='radio' label='4' value='4' onClick={this.battleship} />
              <Form.Check inline name='ship' type='radio' label='5' value='5' onClick={this.aircraftCarrier} />
            </div>
          </Form>
          <h1>Orientation</h1>
            <button onClick={this.props.orientation} className='selector'>Orientation</button>
        </div>
      )
 }
 

}

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = dispatch => {
    return {
        activate: (ship) => dispatch({type: 'ACTIVATE' , payload: ship}),
        orientation: () => dispatch({type: 'ORIENTATION'})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PiecesContainer)
