import { create } from "zustand"
import EDITIONS from "./editionsData"
import { produce } from "immer"
import { phases } from "./constants"

const initialState = {
    score: 0,
    currentPhase: phases.IDLE,
    showRules: false,
    buttonsContainer: EDITIONS.classic,
    battlePicks: {
        plPick: {},
        compPick: {}
    }
}

const useGameData = create(set => ({
    ...initialState,
    startPlayingPhase: (shapeId) => set(state => startPlayingHelper(state, shapeId)),
    toggleRules: () => set(state => ({ ...state, showRules: !state.showRules }))
}))

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