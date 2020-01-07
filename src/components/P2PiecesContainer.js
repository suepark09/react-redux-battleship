import React from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { ACTIVATE2, ORIENTATION2, DEACTIVATE_BOARD2, DEACTIVATE_BUTTON2, UPDATE_ISPLAYING } from '../actions/actionTypes'
import '../App.css'

class P2PiecesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0
        this.ships = [
            {name: 'Aircraft Carrier', length: 5, id: 0},
            {name: 'Battleship', length: 4, id: 1},
            {name: 'Submarine', length: 3, id: 2},
            {name: 'Destroyer', length: 3, id: 3},
            {name: 'Patrol Boat', length: 2, id: 4},
          ];
    }

 aircraftCarrier = (e) => {
    this.props.activate2(this.ships[0])
  }

battleship = (e) => {
    this.props.activate2(this.ships[1])
  }

submarine = (e) => {
    this.props.activate2(this.ships[2])
}

destroyer = (e) => {
    this.props.activate2(this.ships[3])
}

patrolBoat = (e) => {
    this.props.activate2(this.ships[4])
}

handleClickOrientation = () => {
    this.props.orientation2()
    const orientationBtn = document.getElementById('orientation-btn')
    const text = this.props.state.squares.isHorizontal2 ? 'Vertical' : 'Horizontal'
    orientationBtn.innerHTML = text
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

    let patrolBoat = this.props.state.squares.visibleLabel2[this.ships[4].id] ? 'piece-label' : 'piece-label-hidden'
    let destroyer = this.props.state.squares.visibleLabel2[this.ships[3].id] ? 'piece-label' : 'piece-label-hidden'
    let submarine = this.props.state.squares.visibleLabel2[this.ships[2].id] ? 'piece-label' : 'piece-label-hidden'
    let battleship = this.props.state.squares.visibleLabel2[this.ships[1].id] ? 'piece-label' : 'piece-label-hidden'
    let aircraftCarrier = this.props.state.squares.visibleLabel2[this.ships[0].id] ? 'piece-label' : 'piece-label-hidden'

    return (
        <div className="ship-config-container">
            <div className="ship-selection-container">
            <h5>Select Your Ship</h5>
            <div className="box-placeholder"></div>
                <Form className="form2">
                    <ul key='inline-radio' className='mb-3 list-unstyled2'>
                        
                        <label className={ patrolBoat }>
                            <input id="patrol-boat" className="radio" inline='true' name='ship' type='radio' label='' value='2' onClick={this.patrolBoat} disabled = {!this.props.state.squares.activeBtn2[this.ships[4].id]} />
                            <div className="box-container">
                                <div className="box"></div>
                            <   div className="box"></div>
                            </div>
                        </label>
                        
                        <label className={ destroyer }>
                            <input id="destroyer" className="radio" inline='true' name='ship' type='radio' label='' value='3' onClick={this.destroyer} disabled = {!this.props.state.squares.activeBtn2[this.ships[3].id]} />
                            <div className="box-container">
                                <div className="box"></div>
                                <div className="box"></div>
                                <div className="box"></div>
                            </div>
                        </label>
                        
                        <label className={ submarine }>
                            <input id="submarine" className="radio" inline='true' name='ship' type='radio' label='' value='3' onClick={this.submarine} disabled = {!this.props.state.squares.activeBtn2[this.ships[2].id]} />
                            <div className="box-container">
                                <div className="box"></div>
                                <div className="box"></div>
                                <div className="box"></div>
                            </div>
                        </label>
                        
                        <label className={ battleship }>
                            <input id="battleship" className="radio" inline='true' name='ship' type='radio' label='' value='4' onClick={this.battleship} disabled = {!this.props.state.squares.activeBtn2[this.ships[1].id]} />
                            <div className="box-container">
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            </div>
                        </label>

                        <label className={ aircraftCarrier }>
                            <input id="aircraft-carrier" className="radio" inline='true' name='ship' type='radio' label='' value='5' onClick={this.aircraftCarrier} disabled = {!this.props.state.squares.activeBtn2[this.ships[0].id]} />
                            <div className="box-container">
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            </div>
                        </label>
                    </ul>
                 </Form>
            </div>
            <div className="ship-orientation-container">
            <h5>Ship Orientation</h5>
            <button id="orientation-btn" onClick={ this.handleClickOrientation } className='selector'>Horizontal</button>
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
        activate2: (ship) => dispatch({ type: ACTIVATE2, payload: ship }),
        orientation2: () => dispatch({ type: ORIENTATION2 }),
        deactivate2: () => dispatch({ type: DEACTIVATE_BOARD2 }),
        deactivateBtn2: (ship) => dispatch({ type: DEACTIVATE_BUTTON2, payload: ship }),
        updateIsPlaying: (gameId) => dispatch({ type: UPDATE_ISPLAYING, payload: gameId})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(P2PiecesContainer)
