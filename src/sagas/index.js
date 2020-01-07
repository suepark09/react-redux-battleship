import { all, takeEvery, select} from 'redux-saga/effects'
import { CLICKED2, P1ATTACK, P2ATTACK } from '../actions/actionTypes'
import {updatePlayer2Data} from '../firebaseFunc'

export function* watchBoard () {
    yield all([
        takeEvery(CLICKED2, clicked2Saga),
        takeEvery(P1ATTACK, atttack1Saga),
        takeEvery(P2ATTACK, atttack2Saga)
    ])
}

export function* clicked2Saga () {
    const state = yield select()
    if (state.squares.player2Ready) {
        yield updatePlayer2Data(state.squares.gameId, state.squares)
    }
}

export function* atttack1Saga(){
    const state = yield select()
    if(!state.squares.isPlaying){
        yield updatePlayer2Data(state.squares.gameId, state.squares)
    }
}

export function* atttack2Saga(){
    const state = yield select()
    if(state.squares.isPlaying){
        yield updatePlayer2Data(state.squares.gameId, state.squares)
    }
}