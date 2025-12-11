import { create } from "zustand";
import { PaperIcon, RockIcon, ScissorsIcon, LogoBonus, Logo, LizardIcon, SpockIcon, ClassicRules, RPSLSRules, BgTriangle, BgPentagon } from "../icons";
import { produce } from "immer";

const useGameData = create((set) => ({
    editionChoosed: false,
    EditionLogo: null,
    RulesModal: null,
    score: 0,
    battleStarted: false,
    showResult: false,
    showRules: false,
    resultStatus: "",

    battlePhase: {
        playerChoice: {},
        computerChoice: {},
    },

    switchEdition: () => set(state => ({ ...state, editionChoosed: false })),
    setupGameEdition: (edition) => set(state => setupEditionHelper(state, edition)),
    updateShowRules: () => set(state => ({ ...state, showRules: !state.showRules })),
    updateShowResult: () => set(state => updateShowResultHelper(state)),
    updateBattlePhase: (e) => set(state => BattlePhaseHelper(state, e)),
    resetBattlePhase: () => set(state => resetBattlePhaseHelper(state)),
}))

function Test(edition) {
    const background = edition === 'classic' ? BgTriangle : BgPentagon;
    const shapes = [
        {
            id: 1,
            name: 'paper',
            borderColor: 'border-blue-500',
            loseAgainst: ['scissors', 'lizard'],
            icon: PaperIcon,
        },
        {
            id: 2,
            name: 'scissors',
            borderColor: 'border-gold-500',
            loseAgainst: ['rock', 'spock'],
            icon: ScissorsIcon,
        },
        {
            id: 3,
            name: 'rock',
            borderColor: 'border-red-600',
            loseAgainst: ['paper', 'spock'],
            icon: RockIcon,
        },
        {
            id: 4,
            name: 'lizard',
            borderColor: 'border-purple-700',
            loseAgainst: ['rock', 'scissors'],
            icon: LizardIcon,
        },
        {
            id: 5,
            name: 'spock',
            borderColor: 'border-lightblue-500',
            loseAgainst: ['lizard', 'paper'],
            icon: SpockIcon,
        }
    ]
    return {
        background: background,
        shapes: edition === 'classic' ? shapes.slice(0, 3) : shapes
    }
}

function setupEditionHelper(baseState, edition) {
    const nextState = produce(baseState, draft => {
        draft.editionChoosed = true;
        draft.EditionLogo = edition === 'classic' ? Logo : LogoBonus
        draft.RulesModal = edition === 'classic' ? ClassicRules : RPSLSRules
        draft.container = Test(edition);
    })
    return nextState
}

function winnerDecider(plChoice, compChoice, prevScore) {
    if (plChoice.name === compChoice.name) return ({ score: prevScore, status: "Draw" });
    else if (plChoice.loseAgainst[0] === compChoice.name) {
        return { score: prevScore === 0 ? 0 : prevScore - 1, status: "YOU LOSE" };
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