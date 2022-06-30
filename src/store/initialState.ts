import { IGameState } from '../types/gameTypes'


export const gameInitialState: IGameState = {
    step: 1,
    season: 'summer',
    playerPoints: 0,
    gamePoints: 0,
    currentAction: 'start'
}