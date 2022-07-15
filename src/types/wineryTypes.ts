export interface IWineryState {
    redGrapeCount: number,
    whiteGrapeCount: number,
    redWine: number,
    whiteWine: number,
    buildings: {
        trellis: boolean,
        house: boolean,
        mill: boolean,
        ox: boolean,
        tastingRoom: boolean,
        irrigation: boolean
    }
    freeWorkers: number,
    allWorkers: number,
    fields: {
        surface5: number,
        surface6: number,
        surface7: number
    },
    wallet: number
}

export enum wineryActionTypes {
    RED_GRAPE_ADD = 'RED_GRAPE_ADD'
}

interface IRedGrapeAddAction {
    type: wineryActionTypes.RED_GRAPE_ADD,
    payload: {
        count: number
    }
}

export type IWineryAction = IRedGrapeAddAction