import { IGameState } from '../types/gameTypes'
import { IWineryState } from './../types/wineryTypes';


export const gameInitialState: IGameState = {
    year: 1,
    season: 'summer',
    playerPoints: 0,
    gamePoints: 0,
    currentAction: 'start',
    greenDeck: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
    purpleDeck: [201, 202, 203, 204, 205, 206, 207, 208, 209, 210],
    yellowDeck: [301, 302, 303, 304, 305, 306, 307, 308, 309, 310],
    blueDeck: [401, 402, 403, 404, 405, 406, 407, 408, 409, 410],
    cardsInHand: []
}

export const wineryInitialState: IWineryState = {
    redGrapeCount: 0,
    whiteGrapeCount: 0,
    redWine: 0,
    whiteWine: 0,
    buildings: {
        trellis: false,
        house: false,
        mill: false,
        ox: false,
        tastingRoom: false,
        irrigation: false
    },
    freeWorkers: 3,
    allWorkers: 3,
    fields: {
        surface5: 0,
        surface6: 0,
        surface7: 0
    },
    wallet: 0
}