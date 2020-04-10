import { AffinityType, Affinity } from './models'

export const UPDATE_AFFINITY = 'UPDATE_AFFINITY'

type Affinities = {
    [x in AffinityType]: string
}

type State = {
    readonly affinities: Affinities
}

interface UpdateAffinityAction {
    type: typeof UPDATE_AFFINITY
    payload: Affinity
}

const initialState: State = {
    affinities: {
        Polarity: '',
        Charge: '',
        Hydrophilicity: '',
        Aromaticity: '',
        Ionizability: '',
    },
}

export default function reducer(state: State = initialState, action: UpdateAffinityAction): State {
    switch (action.type) {
        case UPDATE_AFFINITY:
            state.affinities[action.payload.type] = action.payload.value

            return {
                ...state,
            }
        default:
            return state
    }
}
