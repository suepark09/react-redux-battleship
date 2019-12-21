import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { clickSquare } from '../actions/index'

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(16).fill(null), //creates a null array of 16 values
            grey: false
        }
        // this.colorChange = this.colorChange.bind(this);
    }

    handleClick(i) {
        const squares = this.state.squares.slice(); //Create copy of squares array instead of changing the existing array in order to not mutate underlying data set
        squares[i] = ' ';
        this.setState({ squares: squares})
        this.props.clickSquare()
    }

    renderSquare(i) {
        return (<Square 
        color = {this.state.squares[i]}
        value= {this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
        />
        );
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                </div>
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
