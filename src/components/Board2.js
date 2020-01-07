import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';

const initialState = {
    currentHoverX: null,
    currentHoverY: null
}

class Board2 extends React.Component {

    state = initialState

    clickItem = (e) => {
        this.props.clickSquare(e.target.value);
        this.setState(initialState)
    }



    render() {      
        const { squares2 } = this.props.props.squares
        const mappedBoard = []
        const shipLength = this.props.props.squares.ship.length
        const col = this.state.currentHoverY
        const colY = this.state.currentHoverX
        const colHovers = []; // holds col indexes that we want to highlight
        let colHoversVert = [];

        //Code for hovering pieces
        if(this.props.props.squares.isHorizontal){
            if (col + shipLength <= 10) {
                for(let i = 0; i < shipLength; i++) {
                    colHovers.push(i + col);
                }
            } else {
                for(let i = shipLength; i > 0; i--) {
                    colHovers.push(10 - i);
                }
            }
        } else {
            if (colY + shipLength <= 10) {
                for(let i = 0; i < shipLength; i++) {
                    colHoversVert.push(i + colY );
                }
            } else {
                for(let i = shipLength; i > 0; i--) {
                    colHoversVert.push(10 - i);
                }
            }
        }

        for (let i = 0; i < 10; i++) { 
            squares2[i].map((singleSquare, idx) => {
                return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={!this.props.props.squares.active} mouseOver={this.mouseOver} mouseOut={this.mouseOut} hidden={true}/>)
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
        clickSquare: (squareKey) => dispatch( {type: 'P1ATTACK', key: squareKey})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board2)


