import { createSlice } from '@reduxjs/toolkit'
// types
import { AffinityType, SequencedAffinity } from '../../models'

const defaultAffinities: Affinities = {
    Polarity: '',
    Charge: '',
    Hydrophilicity: '',
    Aromaticity: '',
    Ionizability: '',
}

const affinitiesSlice = createSlice({
    name: 'affinities',
    initialState: [
        {
            sequenceNumber: 0,
            affinities: defaultAffinities,
        },
    ] as GameSet[],
    reducers: {
        updateAffinity(state, action) {
            const { affinity, sequence } = action.payload as SequencedAffinity
            const gameSet = state.find((g) => g.sequenceNumber === sequence)

            if (gameSet) {
                gameSet.affinities[affinity.type] = affinity.value
            } else {
                state.push({
                    sequenceNumber: sequence,
                    affinities: {
                        ...defaultAffinities,
                        [affinity.type]: affinity.value,
                    },
                })
            }
        },
    },
})

export const { updateAffinity } = affinitiesSlice.actions

export default affinitiesSlice.reducer

// types

type Affinities = {
    [x in AffinityType]: string
}

export interface GameSet {
    sequenceNumber: Number
    affinities: Affinities
}
