import React, { Component } from 'react'
import { connect } from 'react-redux'

class TurnDisplay extends Component {
    constructor(){
        super()
        this.playerTurnDisplay = ['Set Your Ships!!', 'Attack Your Opponent!', 'Wait For Opponent Move', 'Waiting On Opponent To Set Ships...']
    }
 render() {
        const state = this.props.state.squares
        let turn = this.playerTurnDisplay[0]
        if(this.props.player === 1){
            if(state.player1Ready && state.player2Ready){
                if(state.isPlaying){
                    turn = this.playerTurnDisplay[1]
                } else {
                    turn = this.playerTurnDisplay[2]
                } 
            }
        } else {
            if(state.player1Ready && state.player2Ready){
                if(!state.isPlaying){
                    turn = this.playerTurnDisplay[1]
                } else {
                    turn = this.playerTurnDisplay[2]
                } 
            }
        }
        return (
            <div className='turn-display'>
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
