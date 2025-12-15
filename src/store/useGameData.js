import { create } from "zustand"
import EDITIONS from "./editionsData"

const initialState = {
    score: 0,
    showRules: false,
    buttonsContainer: EDITIONS.classic
}

const useGameData = create(set => ({
    ...initialState,
    toggleRules: () => set(state => ({ ...state, showRules: !state.showRules }))
}))


export default useGameData