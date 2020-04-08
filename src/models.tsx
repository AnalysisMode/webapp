export interface Affinity {
    type: AffinityType
    value: string
}

export enum AffinityType {
    Polarity,
    Charge,
    Hydrophilicity,
    Aromaticity,
    Ionizability,
}

export interface Affinities {
    type: AffinityType
    symbols: string[]
}

export const PolaritySymbols = ['?', '▲', '▼']
export const ChargeSymbols = ['?', '+', '-']
export const HydrophilicitySymbols = ['?', '&#xf043;', '&#xf5c7;']
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
