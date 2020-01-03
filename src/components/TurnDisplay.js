import React, { Component } from 'react'
import { connect } from 'react-redux'

class TurnDisplay extends Component {

   

    render() {
        const state = this.props.state.squares

        let turn = state.playerTurnDisplay[0]
        console.log(turn, 'this da turn')
        if(state.activeP1){
            turn = state.playerTurnDisplay[1]
        } else if (state.activeP2) {
            turn = state.playerTurnDisplay[2]
        } else {
            turn = state.playerTurnDisplay[0]
        }

        return (
            <div>
                <h5>{turn}</h5>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {state}
}

export default connect (
    mapStateToProps
)(TurnDisplay)
