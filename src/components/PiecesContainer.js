import React from 'react'
import Form from 'react-bootstrap/Form'
import P1counter from './P1counter'
import { connect } from 'react-redux'
class PiecesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.ships = [
            {name: 'Aircraft Carrier', length: 5, id: 0},
            {name: 'Battleship', length: 4, id: 1},
            {name: 'Submarine', length: 3, id: 2},
            {name: 'Destroyer', length: 3, id: 3},
            {name: 'Patrol Boat', length: 2, id: 4},
          ];
    }
 aircraftCarrier = (e) => {
    console.log('you clicked on aircraft carrier', e.target.value)
    this.props.activate(this.ships[0])
    // this.props.deactivateBtn(this.ships[0])
  }

battleship = (e) => {
    console.log('you clicked on battleship', e.target.value)
    this.props.activate(this.ships[1])
    // this.props.deactivateBtn(this.ships[1])
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
    console.log('what is activate', this.props.activate)
}



 render() {

    // for orientation, vertical is false and horizontal
    // is true. by default it is true. 
    // create function called orientation
    //if this.props.orientation is true...
    //call in button using this.orientation

    return (
        <div className="ship-config-container">
            <div className="ship-selection-container">
            <h5>Your Ships</h5>
                <Form className="form">
                    <ul key='inline-radio' className='mb-3 list-unstyled'>
                        <Form.Check id="patrol-boat" inline name='ship' type='radio' label='2' value='2' onClick={this.patrolBoat} disabled = {!this.props.state.squares.activeBtn[this.ships[4].id]} />
                        <Form.Check id="destroyer" inline name='ship' type='radio' label='3' value='3' onClick={this.destroyer} disabled = {!this.props.state.squares.activeBtn[this.ships[3].id]} />
                        <Form.Check id="submarine" inline name='ship' type='radio' label='3' value='3' onClick={this.submarine} disabled = {!this.props.state.squares.activeBtn[this.ships[2].id]} />
                        <Form.Check id="battleship" inline name='ship' type='radio' label='4' value='4' onClick={this.battleship} disabled = {!this.props.state.squares.activeBtn[this.ships[1].id]} />
                        <Form.Check id="aircraft-carrier" inline name='ship' type='radio' label='5' value='5' onClick={this.aircraftCarrier} disabled = {!this.props.state.squares.activeBtn[this.ships[0].id]} />
                    </ul>
                 </Form>
            </div>
            <div className="ship-orientation-container">
            <h5>Ship Orientation</h5>
            <button id="orientation-btn" onClick={this.props.orientation} className='selector'>Rotate Ship</button>
            </div>
            <div className="ship-orientation-container">
                <P1counter counter={this.props.state.p2total}/>
            </div>
          
          
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
        orientation: () => dispatch({type: 'ORIENTATION'}),
        deactivate: () => dispatch({type: 'DEACTIVATE_BOARD'}),
        deactivateBtn: (ship) => dispatch({type: 'DEACTIVATE_BUTTON', payload: ship })

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PiecesContainer)
