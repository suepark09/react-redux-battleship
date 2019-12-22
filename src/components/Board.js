import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
// import { clickSquare } from '../actions/index'

class Board extends React.Component {
    clickSquare = (e) => {
        console.log('you clicked', e.target.value)
        this.props.clickSquare()
    }

    render() {
        const { squares } = this.props.state.squares
        const mappedBoard = []
        for (let i = 0; i < 10; i++) {
            squares[i].map((singleSquare) => {
                mappedBoard.push(<Square coordinate={singleSquare.key} color={singleSquare.color} onClick={this.clickSquare} />)
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
        clickSquare: () => dispatch({type: 'CLICKED'}) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)
