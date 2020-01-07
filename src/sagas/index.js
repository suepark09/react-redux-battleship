import { all, takeEvery, select} from 'redux-saga/effects'
import { CLICKED2, P1ATTACK, P2ATTACK } from '../actions/actionTypes'
import {updatePlayer2Data} from '../firebaseFunc'

export function* watchBoard () {
    yield all([
        takeEvery(CLICKED2, clicked2Saga),
        takeEvery(P1ATTACK, atttack1Saga),
        takeEvery(P2ATTACK, atttack2Saga)
        // takeEvery(CLICKED, clicked2Saga)
    ])
}

export function* clicked2Saga (action) {
    yield console.log('HELLOOOOOO')
    const state = yield select()
    yield console.log('WOOOOOOW',state)
    if (state.squares.player2Ready) {
        yield updatePlayer2Data(state.squares.gameId, state.squares)
    }
}

export function* atttack1Saga(action){
    const state = yield select()
    if(!state.squares.isPlaying){
        yield updatePlayer2Data(state.squares.gameId, state.squares)
    }
}

export function* atttack2Saga(action){
    const state = yield select()
    if(state.squares.isPlaying){
        yield updatePlayer2Data(state.squares.gameId, state.squares)
    }

}