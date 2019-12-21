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

    //object.keys.map(key => key.map(object => {return <><>}))

    render() {
        console.log('%%%%%%%%', this.props.state.squares.squares)
        const mappedBoard = Object.keys(this.props.state.squares.squares).map((square, i) => {
            console.log('whats square', square)
            return <Square key={i} color = {square[i]}  onClick={() => this.handleClick(i)} />
        })
        return (
            <div>
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
