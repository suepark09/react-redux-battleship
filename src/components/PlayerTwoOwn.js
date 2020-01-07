import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { CLICKED2 } from '../actions/actionTypes'

const initialState = {
    currentHoverX: null,
    currentHoverY: null
}

class PlayerTwoOwn extends React.Component {

    state = initialState

    clickItem = (e) => {
        this.props.clickSquare(e.target.value);
        this.setState(initialState)
    }
    mouseOver = (e) => {
        const x = e.target.value.slice(0, 1);
        const y = e.target.value.slice(1, 2);
        const square = this.props.state.squares.squares2[x].find(square  => square.key === `${x}${y}`)
        const index = this.props.state.squares.squares2[x].indexOf(square)
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
    render() {
        const { squares2 } = this.props.state.squares
        const mappedBoard = []
        let shipLength = this.props.state
        const col = this.state.currentHoverY
        const colY = this.state.currentHoverX
        const colHovers = []; // holds col indexes that we want to highlight
        let colHoversVert = [];
        //Code for hovering pieces
        if(typeof this.props.state.squares.ship2 !== 'undefined'){
            shipLength = this.props.state.squares.ship2.length
            if(this.props.state.squares.isHorizontal2){
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
        } else {
            shipLength = this.props.state
        }
        //Code for hovering pieces
        if(!this.props.state.active2){
            for (let i = 0; i < 10; i++) { 
                squares2[i].map((singleSquare, idx) => {
                    //horizontal hover code
                    if(this.props.state.squares.isHorizontal2){
                        if(i === this.state.currentHoverX && colHovers.includes(idx)) { //expression turns true if idx is in colhovers
                            return mappedBoard.push(<Square hovered={true} key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active2} mouseOver={this.mouseOver} mouseOut={this.mouseOut}/>)
                        }
                    } else {
                          // Vertical hover code 
                        if(colHoversVert.includes(i) && idx === this.state.currentHoverY) { //expression turns true if idx is in colhovers
                        return mappedBoard.push(<Square hovered={true} key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active2} mouseOver={this.mouseOver} mouseOut={this.mouseOut}/>)
                        }
                    }
                    return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active2} mouseOver={this.mouseOver} mouseOut={this.mouseOut}/>)
                })
            }
        } 
return (
    <div id="boardDiv">
        { mappedBoard }
    </div>
)
}
}

const mapStateToProps2 = state => {
    return { state }
}

const mapDispatchToProps2 = dispatch => {
    return {
        clickSquare: (squareKey) => dispatch({type: CLICKED2, key: squareKey})
    }
}

export default connect(
    mapStateToProps2,
    mapDispatchToProps2
)(PlayerTwoOwn)