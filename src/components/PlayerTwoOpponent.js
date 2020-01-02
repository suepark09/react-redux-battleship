import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'

class PlayerTwoOpponent extends Component {

    render() {
        console.log('PLAYER TWO OPPONENT STATE', this.props.state)
        const { squares } = this.props.state.squares
        const mappedBoard = []
        for (let i = 0; i < 10; i++) {
            squares[i].map((singleSquare, idx) => {
                return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} />)
            })
        }

        return (
            <div>
                <p>PLAYER ONE BOARD</p>
                { mappedBoard }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { state }
  }

  export default connect(
    mapStateToProps
  )(PlayerTwoOpponent)
