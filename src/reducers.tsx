import { AffinityType, SequencedAffinity } from './models'

export const UPDATE_AFFINITY = 'UPDATE_AFFINITY'

type Affinities = {
    [x in AffinityType]: string
}

interface GameSetData {
    sequenceNumber: Number
    affinities: Affinities
}

type State = {
    readonly gameSets: GameSetData[]
}

interface UpdateAffinityAction {
    type: typeof UPDATE_AFFINITY
    payload: SequencedAffinity
}

const defaultAffinities: Affinities = {
    Polarity: '',
    Charge: '',
    Hydrophilicity: '',
    Aromaticity: '',
    Ionizability: '',
}

const initialState: State = {
    gameSets: [
        {
            sequenceNumber: 0,
            affinities: {
                Polarity: '',
                Charge: '',
                Hydrophilicity: '',
                Aromaticity: '',
                Ionizability: '',
            },
        },
    ],
}

export default function reducer(state: State = initialState, action: UpdateAffinityAction): State {
    switch (action.type) {
        case UPDATE_AFFINITY:
            let gameSet = state.gameSets.find((g) => g.sequenceNumber === action.payload.sequence)

            if (gameSet) {
                gameSet.affinities[action.payload.affinity.type] = action.payload.affinity.value
            } else {
                let affinities = defaultAffinities
                affinities[action.payload.affinity.type] = action.payload.affinity.value

                state.gameSets.push({
                    sequenceNumber: action.payload.sequence,
                    affinities: affinities,
                })
            }

            return {
                ...state,
            }
        default:
            return state
    }
}
