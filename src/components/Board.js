import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
// import { clickSquare } from '../actions/index'

class Board extends React.Component {
    clickItem = (e) => {
        this.props.clickSquare(e.target.value)
    }

    render() {
        const { squares } = this.props.state.squares
        const mappedBoard = []
        for (let i = 0; i < 10; i++) {
            squares[i].map((singleSquare) => {
                return mappedBoard.push(<Square key={singleSquare.key} coordinate={singleSquare.key} color={singleSquare.color} onClick={this.clickItem} />)
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
        clickSquare: (squareKey) => dispatch({type: 'CLICKED', key: squareKey}) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)
