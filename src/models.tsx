export interface Affinity {
    type: AffinityType
    value: string
}

export interface SequencedAffinity {
    sequence: Number
    affinity: Affinity
}

export enum AffinityType {
    Polarity = 'Polarity',
    Charge = 'Charge',
    Hydrophilicity = 'Hydrophilicity',
    Aromaticity = 'Aromaticity',
    Ionizability = 'Ionizability',
}

export interface Affinities {
    type: AffinityType
    symbols: string[]
}

export interface GameSet {
    sequences: string[]
    matrix: string[][]
}

export const PolaritySymbols = ['?', '▲', '▼']
export const ChargeSymbols = ['?', '+', '-']
export const HydrophilicitySymbols = ['?', 'M', 'W']
export const AromaticitySymbols = ['?', '⬢', '⬡']
export const IonizabilitySymbols = ['?', '◉', '◯']

export const MappedAffinities: Affinities[] = [
    {
        type: AffinityType.Polarity,
        symbols: PolaritySymbols,
    },
    {
        type: AffinityType.Charge,
        symbols: ChargeSymbols,
    },
    {
        type: AffinityType.Hydrophilicity,
        symbols: HydrophilicitySymbols,
    },
    {
        type: AffinityType.Aromaticity,
        symbols: AromaticitySymbols,
    },
    {
        type: AffinityType.Ionizability,
        symbols: IonizabilitySymbols,
    },
]
