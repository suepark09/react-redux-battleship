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



// active state of radio button should be true 
// once you click on a button, state of button should revert false AFTER you place 
// a ship on the board

 render() {

    // for orientation, vertical is false and horizontal
    // is true. by default it is true. 
    // create function called orientation
    //if this.props.orientation is true...
    //call in button using this.orientation

    let visibleLabel = this.props.visibleLabel ? 'piece-label' : 'piece-label-hidden'
    console.log('wut r thooooooseeeee', this.props.visibleLabel)
    return (
        <div className="ship-config-container">
            <div className="ship-selection-container">
            <h5>Select Your Ship</h5>
                <Form className="form">
                    <ul key='inline-radio' className='mb-3 list-unstyled'>
                        
                        <label className="piece-label">
                            <Form.Check id="patrol-boat" className="radio" inline name='ship' type='radio' label='' value='2' onClick={this.patrolBoat} disabled = {!this.props.state.squares.activeBtn[this.ships[4].id]} />
                            <div className="box"></div>
                            <div className="box"></div>
                        </label>
                        
                        <label className="piece-label">
                            <Form.Check id="destroyer" className="radio" inline name='ship' type='radio' label='' value='3' onClick={this.destroyer} disabled = {!this.props.state.squares.activeBtn[this.ships[3].id]} />
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </label>
                        
                        <label className="piece-label">
                            <Form.Check id="submarine" className="radio" inline name='ship' type='radio' label='' value='3' onClick={this.submarine} disabled = {!this.props.state.squares.activeBtn[this.ships[2].id]} />
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </label>
                        
                        <label className="piece-label">
                            <Form.Check id="battleship" className="radio" inline name='ship' type='radio' label='' value='4' onClick={this.battleship} disabled = {!this.props.state.squares.activeBtn[this.ships[1].id]} />
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </label>

                        <label className="piece-label">
                            <Form.Check id="aircraft-carrier" className="radio" inline name='ship' type='radio' label='' value='5' onClick={this.aircraftCarrier} disabled = {!this.props.state.squares.activeBtn[this.ships[0].id]} />
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </label>
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
