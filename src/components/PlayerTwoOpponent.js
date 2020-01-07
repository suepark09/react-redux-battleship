import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'
import { P2ATTACK } from '../actions/actionTypes'

const initialState = {
    currentHoverX: null,
    currentHoverY: null
}

class PlayerTwoOpponent extends Component {
  
state = initialState

    clickItem = (e) => {
        this.props.clickSquare(e.target.value);
        this.setState(initialState)
    }
 
 


    render() {
        const mappedBoard = []
        for (let i = 0; i < 10; i++) {
            this.props.state.squares.squares[i].map((singleSquare, idx) => {
                return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} onClick={this.clickItem} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} active={!this.props.state.squares.isPlaying} hidden={true} />)
            })
        }

        return (
            <div id="boardDiv">
                { mappedBoard }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { state }
  }

  const mapDispatchToProps = dispatch => {
    return {
        clickSquare: (squareKey) => dispatch( {type: P2ATTACK, key: squareKey})
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayerTwoOpponent)


