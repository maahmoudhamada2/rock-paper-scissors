import { create } from "zustand"
import EDITIONS from "./editionsData"

const initialState = {
    buttonsContainer: EDITIONS.classic

}

const useGameData = create(set => ({
    ...initialState,
}))


export default useGameData