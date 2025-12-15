import { RockIcon, PaperIcon, ScissorsIcon, BgTriangle } from "../icons"

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
}

export default EDITIONS