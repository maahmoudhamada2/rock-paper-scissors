import { LizardIcon, SpockIcon, RockIcon, PaperIcon, ScissorsIcon, BgTriangle, BgPentagon } from "../icons"

const EDITIONS = {
    classic: {
        background: { icon: BgTriangle, position: 'row-start-3 col-start-4 row-span-14 col-span-11' },
        shapes: [
            {
                id: 1,
                name: 'paper',
                borderColor: 'border-blue-500',
                loseAgainst: ['scissors', 'lizard'],
                icon: PaperIcon,
                position: 'row-start-3 col-start-2 col-span-6'
            },
            {
                id: 2,
                name: 'scissors',
                borderColor: 'border-gold-500',
                loseAgainst: ['rock', 'spock'],
                icon: ScissorsIcon,
                position: 'row-start-3 col-start-10 col-span-6'
            },
            {
                id: 3,
                name: 'rock',
                borderColor: 'border-red-600',
                loseAgainst: ['paper', 'spock'],
                icon: RockIcon,
                position: 'row-start-10 col-start-6 col-span-6'
            },
        ]
    },
    rpsls: {
        background: { icon: BgPentagon, position: 'row-start-2 col-start-3 row-span-13 col-span-13' },
        shapes: [
            {
                id: 1,
                name: 'paper',
                borderColor: 'border-blue-500',
                loseAgainst: ['scissors', 'lizard'],
                icon: PaperIcon,
                position: 'row-start-5 col-start-11 col-span-5'
            },
            {
                id: 2,
                name: 'scissors',
                borderColor: 'border-gold-500',
                loseAgainst: ['rock', 'spock'],
                icon: ScissorsIcon,
                position: 'row-start-1 col-start-6 col-span-5'
            },
            {
                id: 3,
                name: 'rock',
                borderColor: 'border-red-600',
                loseAgainst: ['paper', 'spock'],
                icon: RockIcon,
                position: 'row-start-11 col-start-9 col-span-5'
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
    }
}

export default EDITIONS