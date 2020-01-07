import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';

const initialState = {
    currentHoverX: null,
    currentHoverY: null
}

class Board extends React.Component {

    state = initialState
    
   

    clickItem = (e) => {
        this.props.clickSquare(e.target.value);
        this.setState(initialState)
        this.shipCounter()
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

    shipCounter = () => {
        // const { squares } = this.props.state
        const placedShips = this.props.state.squares.activeBtn
        let shipCounter = 0
        for (let i = 0; i<= placedShips.length; i++) {
          if (placedShips[i] === false) {
            console.log(`${shipCounter} SHIP PLACED`)
            shipCounter++
          }
        }

        if(shipCounter === 5){
            
        }
    
        if(shipCounter === 5 && this.props.state.isPlaying === true){
          this.props.clickActiveP1()
          //firebase
        }
    }



    render() {    
        console.log(this.props.state, '***')
        const { squares } = this.props.state.squares
        const mappedBoard = []
        // const shipName = this.props.state.squares.ship.name
        const shipLength = this.props.state.squares.ship.length
        console.log(shipLength, '***oijiojoijoijoij')
     
        const col = this.state.currentHoverY
        const colY = this.state.currentHoverX

        const colHovers = []; // holds col indexes that we want to highlight
        let colHoversVert = [];

        //Code for hovering pieces

        if(this.props.state.squares.isHorizontal){
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
            squares[i].map((singleSquare, idx) => {
                //horizontal hover code
                if(this.props.state.squares.isHorizontal){
                    if(i === this.state.currentHoverX && colHovers.includes(idx)) { //expression turns true if idx is in colhovers
                        return mappedBoard.push(<Square hovered={true} key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active} mouseOver={this.mouseOver} mouseOut={this.mouseOut}/>)
                    }
                } else {
                      // Vertical hover code 
                    if(colHoversVert.includes(i) && idx === this.state.currentHoverY) { //expression turns true if idx is in colhovers
                    return mappedBoard.push(<Square hovered={true} key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active} mouseOver={this.mouseOver} mouseOut={this.mouseOut}/>)
                    }
                }
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
        clickSquare: (squareKey) => dispatch({type: 'CLICKED', key: squareKey}, {type: 'P1ATTACK', key: squareKey} ),
        clickActiveP1: () => dispatch({type: 'SHIPSSET'}),
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)


