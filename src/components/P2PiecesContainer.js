import React from 'react'
import Form from 'react-bootstrap/Form'
import P1counter from './P1counter'
import { connect } from 'react-redux'
import '../App.css'

class P2PiecesContainer extends React.Component {

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
    this.props.activate2(this.ships[0])
    // this.props.deactivate2Btn(this.ships[0])
  }

battleship = (e) => {
    console.log('you clicked on battleship', e.target.value)
    this.props.activate2(this.ships[1])
    // this.props.deactivate2Btn(this.ships[1])
  }

submarine = (e) => {
    console.log('you clicked on submarine', e.target.value)
    this.props.activate2(this.ships[2])

}

destroyer = (e) => {
    console.log('you clicked on destroyer', e.target.value)
    this.props.activate2(this.ships[3])
}

patrolBoat = (e) => {
    console.log('you clicked on patrol boat', e.target.value)
    this.props.activate2(this.ships[4])
    console.log('what is activate', this.props.activate)
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
                <Form className="form">
                    <ul key='inline-radio' className='mb-3 list-unstyled'>
                        
                        <label className={ patrolBoat }>
                            <Form.Check id="patrol-boat" className="radio" inline name='ship' type='radio' label='' value='2' onClick={this.patrolBoat} disabled = {!this.props.state.squares.activeBtn2[this.ships[4].id]} />
                            <div className="box"></div>
                            <div className="box"></div>
                        </label>
                        
                        <label className={ destroyer }>
                            <Form.Check id="destroyer" className="radio" inline name='ship' type='radio' label='' value='3' onClick={this.destroyer} disabled = {!this.props.state.squares.activeBtn2[this.ships[3].id]} />
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </label>
                        
                        <label className={ submarine }>
                            <Form.Check id="submarine" className="radio" inline name='ship' type='radio' label='' value='3' onClick={this.submarine} disabled = {!this.props.state.squares.activeBtn2[this.ships[2].id]} />
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </label>
                        
                        <label className={ battleship }>
                            <Form.Check id="battleship" className="radio" inline name='ship' type='radio' label='' value='4' onClick={this.battleship} disabled = {!this.props.state.squares.activeBtn2[this.ships[1].id]} />
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </label>

                        <label className={ aircraftCarrier }>
                            <Form.Check id="aircraft-carrier" className="radio" inline name='ship' type='radio' label='' value='5' onClick={this.aircraftCarrier} disabled = {!this.props.state.squares.activeBtn2[this.ships[0].id]} />
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
            <button id="orientation-btn" onClick={ this.handleClickOrientation } className='selector'>Horizontal</button>
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
        activate2: (ship) => dispatch({type: 'ACTIVATE2' , payload: ship}),
        orientation2: () => dispatch({type: 'ORIENTATION2'}),
        deactivate2: () => dispatch({type: 'DEACTIVATE_BOARD2'}),
        deactivateBtn2: (ship) => dispatch({type: 'DEACTIVATE_BUTTON2', payload: ship })

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(P2PiecesContainer)
