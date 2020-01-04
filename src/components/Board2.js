import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
// import { clickSquare } from '../actions/index'

const initialState = {
    currentHoverX: null,
    currentHoverY: null
}

class Board2 extends React.Component {

    state = initialState
   

    clickItem = (e) => {
        console.log('clicked')
        this.props.clickSquare(e.target.value);
        this.setState(initialState)
    }

    // clickItem = (e) => {
    //     // this.props.(e.target.value);
    //     this.setState(initialState)
    // }

    // mouseOver = (e) => {
    //     const x = e.target.value.slice(0, 1);
    //     const y = e.target.value.slice(1, 2);

    //     const square = this.props.state.squares.squares2[x].find(square  => square.key === `${x}${y}`)
    //     const index = this.props.state.squares.squares2[x].indexOf(square)

    //     this.setState({
    //         currentHoverX: +x,
    //         currentHoverY: index
    //     })
    // }

    // mouseOut = (e) => {
    //     this.setState({
    //         currentHoverX: null,
    //         currentHoverY: null
    //     })
    // }



    render() {      
        // console.log(this.props.state, '***')
        const { squares2 } = this.props.state.squares
        const mappedBoard = []
        // const shipName = this.props.state.squares.ship.name
        const shipLength = this.props.state.squares.ship.length
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
            squares2[i].map((singleSquare, idx) => {
                //horizontal hover code
                
                return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={!this.props.state.squares.active} mouseOver={this.mouseOver} mouseOut={this.mouseOut}/>)
            })
        }

    
//     render() {     // console.log(this.props.state, '***')
//     const { squares } = this.props.state.squares
//     console.log(squares, 'squaressss')
//    const mappedBoard = []
//    for (let i = 0; i < 10; i++) {
//        squares[i].map((singleSquare, idx) => {
//            return mappedBoard.push(<Square key={singleSquare.key + `${idx}`} coordinate={singleSquare.key} color={singleSquare.color} square={singleSquare} onClick={this.clickItem} active={this.props.state.squares.active} />)
//        })
//    }

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
        clickSquare: (squareKey) => dispatch( {type: 'P1ATTACK', key: squareKey})
    }
}

export default connect(
    mapStateToProps2,
    mapDispatchToProps2
)(Board2)


