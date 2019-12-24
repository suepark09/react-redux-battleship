import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
// import { clickSquare } from '../actions/index'


class Board extends React.Component {
    clickItem = (e) => {
        this.props.clickSquare(e.target.value)
    }
    render() {     // console.log(this.props.state, '***')
         const { squares } = this.props.state.squares
        const mappedBoard = []
        for (let i = 0; i < 10; i++) {
            squares[i].map((singleSquare, idx) => {
                return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active} />)
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
        clickSquare: (squareKey) => dispatch({type: 'CLICKED', key: squareKey}), 
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)
