import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { clickSquare } from '../actions/index'


class Board extends React.Component {
    handleClick(i) {
        console.log(this.props.state.squares, '****')
        // const squares = this.props.state.squares.slice(); //Create copy of squares array instead of changing the existing array in order to not mutate underlying data set
        // const squares = i.target
        // squares[i] = ' ';
        // this.setState({ squares: squares})
        this.props.clickSquare()
        
    }

    renderSquare(i) {
        return (<Square 
        color = {this.props.state.squares[i]}
        value= {this.props.state.squares[i]} 
        onClick={() => this.handleClick(i)}
        />
        );
    }

    render() {
        const { squares } = this.props.state.squares
        const mappedBoard = []
        for (let i = 0; i < 10; i++) {
            squares[i].map((singleSquare, idx) => {
                console.log('single square', singleSquare + idx)
                mappedBoard.push(<Square color={singleSquare.color} />)
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
