import { create } from "zustand";
import { PaperIcon, RockIcon, ScissorsIcon } from "../icons";
import { produce } from "immer";

const useGameData = create((set) => ({
    score: 0,
    battleStarted: false,
    showResult: false,
    resultStatus: "",

    battlePhase: {
        playerChoice: {},
        computerChoice: {},
    },
    shapes: [
        {
            id: 1,
            name: 'paper',
            loseAgainst: ['scissors'],
            icon: PaperIcon,
        },

        {
            id: 2,
            name: 'scissors',
            loseAgainst: ['rock'],
            icon: ScissorsIcon,
        },
        {
            id: 3,
            name: 'rock',
            loseAgainst: ['paper'],
            icon: RockIcon,
        },
    ],
    updateShowResult: () => set(state => updateShowResultHelper(state)),
    updateBattlePhase: (e) => set(state => BattlePhaseHelper(state, e)),
    resetBattlePhase: () => set(state => resetBattlePhaseHelper(state)),
}))


function winnerDecider(plChoice, compChoice, prevScore) {
    if (plChoice.name === compChoice.name) return ({ score: prevScore, status: "Draw" });
    else if (plChoice.loseAgainst[0] === compChoice.name) {
        return { score: prevScore === 0 ? 0 : prevScore - 1, status: "YOU LOST" };
    } else {
        return { score: prevScore + 1, status: "YOU WIN" };
    }
}


function updateShowResultHelper(baseState) {
    const nextState = produce(baseState, draft => {
        const plChoice = draft.battlePhase.playerChoice;
        const compChoice = draft.battlePhase.computerChoice;
        const { status, score } = winnerDecider(plChoice, compChoice, draft.score)
        draft.showResult = true;
        draft.resultStatus = status;
        draft.score = score
    })
    return nextState
}

function resetBattlePhaseHelper(baseState) {
    const nextState = produce(baseState, draft => {
        draft.battleStarted = false;
        draft.showResult = false;
        draft.resultStatus = ""
        draft.battlePhase = {
            playerChoice: {},
            computerChoice: {},
        }
    })
    return nextState
}

function BattlePhaseHelper(baseState, e) {
    const nextState = produce(baseState, draft => {
        const plShape = draft.shapes[Number(e.target.id) - 1]
        const compShape = draft.shapes[Math.floor(Math.random() * 3)]
        draft.battleStarted = true
        draft.battlePhase.computerChoice = compShape;
        draft.battlePhase.playerChoice = plShape;
        // draft.battlePhase.resultStatus = winnerDecider(plShape, compShape)
    })
    return nextState
}

export default useGameData