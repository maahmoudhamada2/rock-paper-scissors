import { create } from "zustand";
import { PaperIcon, RockIcon, ScissorsIcon, LogoBonus, Logo, LizardIcon, SpockIcon, ClassicRules, RPSLSRules, BgTriangle, BgPentagon } from "../icons";
import { produce } from "immer";

const useGameData = create((set) => ({
    isChoosed: false,
    EditionLogo: null,
    RulesModal: null,
    score: 0,
    battleStarted: false,
    showResult: false,
    showRules: false,
    resultStatus: "",

    battlePhase: {
        playerChoice: { winner: false },
        computerChoice: { winner: false },
    },

    switchEdition: () => set(state => ({ ...state, isChoosed: false, score: 0 })),
    setupGameEdition: (edition) => set(state => setupEditionHelper(state, edition)),
    updateShowRules: () => set(state => ({ ...state, showRules: !state.showRules })),
    updateShowResult: () => set(state => updateShowResultHelper(state)),
    updateBattlePhase: (e) => set(state => BattlePhaseHelper(state, e)),
    resetBattlePhase: () => set(state => resetBattlePhaseHelper(state)),
}))

function Test(edition) {
    const background = edition === 'classic' ? ({ icon: BgTriangle, position: 'row-start-3 col-start-4 row-span-14 col-span-11' }) : ({ icon: BgPentagon, position: 'row-start-2 col-start-3 row-span-13 col-span-13' });
    const shapes = [
        {
            id: 1,
            name: 'paper',
            borderColor: 'border-blue-500',
            loseAgainst: ['scissors', 'lizard'],
            icon: PaperIcon,
            position: edition === 'classic' ? 'row-start-3 col-start-2 col-span-6' : 'row-start-5 col-start-11 col-span-5'
        },
        {
            id: 2,
            name: 'scissors',
            borderColor: 'border-gold-500',
            loseAgainst: ['rock', 'spock'],
            icon: ScissorsIcon,
            position: edition === 'classic' ? 'row-start-3 col-start-10 col-span-6' : 'row-start-1 col-start-6 col-span-5'
        },
        {
            id: 3,
            name: 'rock',
            borderColor: 'border-red-600',
            loseAgainst: ['paper', 'spock'],
            icon: RockIcon,
            position: edition === 'classic' ? 'row-start-10 col-start-6 col-span-6' : 'row-start-11 col-start-9 col-span-5'
        },
        {
            id: 4,
            name: 'lizard',
            borderColor: 'border-purple-700',
            loseAgainst: ['rock', 'scissors'],
            icon: LizardIcon,
            position: 'row-start-11 col-start-3 col-span-5'
        },
        {
            id: 5,
            name: 'spock',
            borderColor: 'border-lightblue-500',
            loseAgainst: ['lizard', 'paper'],
            icon: SpockIcon,
            position: 'row-start-5 col-start-1 col-span-5'
        }
    ]
    return {
        background: background,
        shapes: edition === 'classic' ? shapes.slice(0, 3) : shapes
    }
}

function setupEditionHelper(baseState, edition) {
    const nextState = produce(baseState, draft => {
        draft.isChoosed = true;
        draft.EditionLogo = edition === 'classic' ? Logo : LogoBonus
        draft.RulesModal = edition === 'classic' ? ClassicRules : RPSLSRules
        draft.container = Test(edition);
    })
    return nextState
}

function winnerDecider(plChoice, compChoice, draft) {
    if (plChoice.name === compChoice.name) return ({ score: draft.score, status: "Draw" });
    else if (plChoice.loseAgainst.includes(compChoice.name)) {
        return { score: draft.score === 0 ? 0 : draft.score - 1, status: "YOU LOSE" };
    } else {
        return { score: draft.score + 1, status: "YOU WIN" };
    }
}

function winnerDeciderBeta(draft) {
    const plChoice = draft.battlePhase.playerChoice
    const compChoice = draft.battlePhase.computerChoice
    if (plChoice.name === compChoice.name) {
        draft.resultStatus = 'Draw'
    } else if (plChoice.loseAgainst.includes(compChoice.name)) {
        draft.score = draft.score === 0 ? 0 : draft.score - 1;
        draft.resultStatus = 'YOU LOSE'
        compChoice.winner = true
    } else {
        draft.score = draft.score + 1
        draft.resultStatus = 'YOU WIN'
        plChoice.winner = true
    }
    draft.showResult = true
}


function updateShowResultHelper(baseState) {
    const nextState = produce(baseState, draft => {
        const plChoice = draft.battlePhase.playerChoice;
        const compChoice = draft.battlePhase.computerChoice;
        winnerDeciderBeta(draft)
        // draft.showResult = true;
        // draft.resultStatus = status;
        // draft.score = score
    })
    return nextState
}

function resetBattlePhaseHelper(baseState) {
    const nextState = produce(baseState, draft => {
        // draft.score = 0;
        draft.showRules = false
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
        const plShape = draft.container.shapes[Number(e.target.id) - 1]
        const compShape = draft.container.shapes[Math.floor(Math.random() * draft.container.shapes.length)]
        draft.battleStarted = true
        draft.battlePhase.computerChoice = compShape;
        draft.battlePhase.playerChoice = plShape;
        // draft.battlePhase.resultStatus = winnerDecider(plShape, compShape)
    })
    return nextState
}

export default useGameData