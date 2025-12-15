import { create } from "zustand"
import EDITIONS from "./editionsData"

const initialState = {
    score: 0,
    buttonsContainer: EDITIONS.classic
}

const useGameData = create(set => ({
    ...initialState,
}))


export default useGameData