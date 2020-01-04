import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'

class PlayerTwoOpponent extends Component {

    render() {
        console.log('PLAYER TWO OPPONENT PROPS', this.props)
        const mappedBoard = []
        for (let i = 0; i < 10; i++) {
            this.props.state.squares.squares[i].map((singleSquare, idx) => {
                return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} />)
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
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayerTwoOpponent)