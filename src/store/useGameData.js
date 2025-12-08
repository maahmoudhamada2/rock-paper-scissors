import { create } from "zustand";
import { PaperIcon, RockIcon, ScissorsIcon, LogoBonus, Logo, LizardIcon, SpockIcon, ClassicRules, RPSLSRules } from "../icons";
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

function setupEditionHelper(baseState, edition) {
    const shapes = [
        {
            id: 1,
            name: 'paper',
            borderColor: 'border-blue-500',
            loseAgainst: ['scissors'],
            icon: PaperIcon,
        },
        {
            id: 2,
            name: 'scissors',
            borderColor: 'border-gold-500',
            loseAgainst: ['rock'],
            icon: ScissorsIcon,
        },
        {
            id: 3,
            name: 'rock',
            borderColor: 'border-red-600',
            loseAgainst: ['paper'],
            icon: RockIcon,
        },
        {
            id: 4,
            name: 'lizard',
            borderColor: 'border-purple-700',
            // loseAgainst: [],
            icon: LizardIcon
        },
        {
            id: 5,
            name: 'spock',
            borderColor: 'border-lightblue-500',
            // loseAgainst: [],
            icon: SpockIcon
        }
    ]
    const nextState = produce(baseState, draft => {
        draft.editionChoosed = true
        if (edition === 'classic') {
            draft.EditionLogo = Logo;
            draft.RulesModal = ClassicRules
            draft.shapes = shapes.slice(0, 3)
        } else {
            draft.EditionLogo = LogoBonus
            draft.RulesModal = RPSLSRules
            draft.shapes = shapes
        }
    })
    return nextState;
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