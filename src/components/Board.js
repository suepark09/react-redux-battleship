import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
// import { clickSquare } from '../actions/index'


class Board extends React.Component {

    state = {
        currentHoverX: null,
        currentHoverY: null
    }
   

    clickItem = (e) => {
        this.props.clickSquare(e.target.value);
    }

    mouseOver = (e) => {
        const x = e.target.value.slice(0, 1);
        const y = e.target.value.slice(1, 2);

        const square = this.props.state.squares.squares[x].find(square  => square.key === `${x}${y}`)
        const index = this.props.state.squares.squares[x].indexOf(square)

        this.setState({
            currentHoverX: +x,
            currentHoverY: index
        })
    }

    mouseOut = (e) => {
        this.setState({
            currentHoverX: null,
            currentHoverY: null
        })
    }



    render() {     // console.log(this.props.state, '***')
        const { squares } = this.props.state.squares
        const mappedBoard = []
        const shipName = this.props.state.squares.ship.name
        const shipLength = this.props.state.squares.ship.length
        const col = this.state.currentHoverY

        const colHovers = []; // holds col indexes that we want to highlight

        //Code for hovering pieces

        if (col + shipLength <= 10) {
            for(let i = 0; i < shipLength; i++) {
                colHovers.push(i + col);
            }
        } else {
            for(let i = shipLength; i > 0; i--) {
                colHovers.push(10 - i);
            }
        }

        for (let i = 0; i < 10; i++) { 
            squares[i].map((singleSquare, idx) => {
   
                if(i === this.state.currentHoverX && colHovers.includes(idx)) { //expression turns true if idx is in colhovers
                    return mappedBoard.push(<Square hovered={true} key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active} mouseOver={this.mouseOver} mouseOut={this.mouseOut}/>)
                }

                // console.log(idx, this.state.currentHoverY)
            
                // Vertical hover code 
                // if(colHovers.includes(i) && idx === this.state.currentHoverY) { //expression turns true if idx is in colhovers
                //     return mappedBoard.push(<Square hovered={true} key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active} mouseOver={this.mouseOver} mouseOut={this.mouseOut}/>)
                // }
                return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active} mouseOver={this.mouseOver} mouseOut={this.mouseOut}/>)
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
        clickSquare: (squareKey) => dispatch({type: 'SETSHIP', key: squareKey}, {type: 'P1ATTACK', key: squareKey}, {type: 'P2ATTACK', key: squareKey} )
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)
