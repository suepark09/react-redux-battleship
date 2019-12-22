import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { clickSquare } from '../actions/index'

class Board extends React.Component {
    render() {
        const { squares } = this.props.state.squares
        const mappedBoard = []
        for (let i = 0; i < 10; i++) {
            squares[i].map((singleSquare, idx) => {
                console.log('single square', singleSquare + idx)
                mappedBoard.push(<Square color={singleSquare.color} onClick={this.props.clickSquare} />)
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
        clickSquare: e => dispatch(clickSquare(e)) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)
