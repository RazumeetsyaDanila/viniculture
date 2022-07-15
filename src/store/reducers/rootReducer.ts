import { combineReducers } from "redux"
import { gameReducer } from './gameReducer'
import { wineryReducer } from './wineryReducer';

export const  rootReducer = combineReducers({
    game: gameReducer,
    winery: wineryReducer
})

export type rootState = ReturnType<typeof rootReducer>