export interface IGameState {
    step: number,
    season: string,
    playerPoints: number,
    gamePoints: number,
    currentAction: string
}

export enum gameActionTypes {
    NEXT_STEP = 'NEXT_STEP',
    NEXT_SEASON = 'NEXT_SEASON',
    PLAYER_POINTS_CHANGE = 'PLAYER_POINTS_CHANGE',
    GAME_POINTS_CHANGE = 'GAME_POINTS_CHANGE'
}

interface INextStepAction {
    type: gameActionTypes.NEXT_STEP
}

interface INextSeasonAction {
    type: gameActionTypes.NEXT_SEASON,
    payload: {
        season: string
    }
}

interface IPlayerPointsAction {
    type: gameActionTypes.PLAYER_POINTS_CHANGE,
    payload: {
        points: number
    }
}

interface IGamePointsAction {
    type: gameActionTypes.GAME_POINTS_CHANGE,
    payload: {
        points: number
    }
}

export type IGameAction = INextStepAction | INextSeasonAction | IPlayerPointsAction | IGamePointsAction