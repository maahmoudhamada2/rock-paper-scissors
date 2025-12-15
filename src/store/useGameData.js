import { create } from "zustand"
import EDITIONS from "./editionsData"
import { produce } from "immer"
import { phases, results } from "./constants"

const initialState = {
    score: 0,
    resultStatus: "",
    currentEdition: null,
    currentPhase: phases.EDITIONS,
    showRules: false,
    buttonsContainer: EDITIONS.classic,
    battlePicks: {
        plPick: {},
        compPick: {}
    }
}

const useGameData = create(set => ({
    ...initialState,

    setupEdition: (edition) => set(state => setupEditionHelper(state, edition)),
    startPlayingPhase: (shapeId) => set(state => startPlayingHelper(state, shapeId)),
    decideWinner: () => set(state => decideWinnerHelper(state)),
    gameReset: () => set((state) => ({ ...initialState, score: state.score, currentPhase: phases.IDLE })),
    toggleRules: () => set(state => ({ ...state, showRules: !state.showRules }))

}))

function setupEditionHelper(baseState, edition) {
    const nextState = produce(baseState, draft => {
        draft.currentPhase = phases.IDLE
        draft.buttonsContainer = EDITIONS[edition]
    })
    return nextState
}


function decideWinnerHelper(baseState) {
    const nextState = produce(baseState, draft => {
        const { plPick, compPick } = draft.battlePicks
        draft.currentPhase = phases.RESULT
        if (plPick.shape.name === compPick.shape.name) draft.resultStatus = results.DRAW
        else if (plPick.shape.loseAgainst.includes(compPick.shape.name)) {
            compPick.winner = true
            draft.resultStatus = results.LOSE
            draft.score && draft.score--
        }
        else {
            plPick.winner = true
            draft.resultStatus = results.WIN
            draft.score++
        }
    })
    return nextState
}


function startPlayingHelper(baseState, shapeId) {
    const nextState = produce(baseState, draft => {
        const shapes = draft.buttonsContainer.shapes;

        draft.currentPhase = phases.PLAYING
        draft.battlePicks.plPick.shape = shapes.find((shape) => shape.id === shapeId)
        draft.battlePicks.compPick.shape = shapes[Math.floor(Math.random() * shapes.length)]
    })
    return nextState
}

export default useGameData