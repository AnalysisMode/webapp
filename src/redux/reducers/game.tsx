import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// utils
import axios from '../../utils/axiosInstance'
// types
import { GameSymbols } from '../../views/GameBeta/GameMatrixBlock'

export const getPuzzle = createAsyncThunk('game/puzzle', async () => {
    return axios.get('/puzzle', {
        baseURL: 'https://www.analysismode.com/am',
    })
})

const matrix = [
    ['â–²', 'â–¼', 'â—¯', '=', 'â–¼', '=', 'â–¼', '='],
    ['M', '=', 'W', '=', 'â—¯', '=', '-', 'W'],
    ['â—¯', 'â—¯', '=', 'â–²', '=', '=', 'â–²', 'â—¯'],
    ['W', 'â–²', 'â—¯', 'â–²', 'W', 'â—¯', '=', 'W'],
    ['â—‰', 'â–¼', 'â–²', '=', 'M', 'W', 'â–²', 'â–²'],
    ['=', 'W', '=', 'â—¯', 'W', 'â–¼', '=', 'â–²'],
    ['â–²', 'W', 'â–²', 'M', 'â–²', '=', 'â–²', 'â–²'],
    ['â—‰', 'â—¯', 'â—¯', 'â—¯', '=', 'M', 'â—¯', 'M'],
]

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        matrix: matrix,
        sequences: [],
        puzzle_id: '',
        sorter: [0, 1, 2, 3, 4, 5, 6, 7],
        selected: [[], [], [], [], [], [], [], []],
    } as IGameState,
    reducers: {
        swapRows: ({ sorter }, action) => {
            const [sIndex, dIndex] = action.payload as [number, number]
            const temp = sorter[sIndex]
            if (sIndex > dIndex) {
                for (let i = sIndex; i > dIndex; i--) sorter[i] = sorter[i - 1]
            }
            if (sIndex < dIndex) {
                for (let i = sIndex; i < dIndex; i++) sorter[i] = sorter[i + 1]
            }
            sorter[dIndex] = temp
        },
        selectBlock: ({ selected }, action) => {
            const [rIndex, cIndex] = action.payload as [number, number]
            selected[rIndex][cIndex] = !selected[rIndex][cIndex]
        },
        resetSelected: (state) => {
            state.selected = [[], [], [], [], [], [], [], []]
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(getPuzzle.fulfilled, (state, { payload }: any) => {
            const { matrix, sequences, puzzle_id } = payload as IPuzzleResponse
            state.matrix = matrix
            state.sequences = sequences
            state.puzzle_id = puzzle_id
        })
    },
})

export const { swapRows, selectBlock, resetSelected } = gameSlice.actions

export default gameSlice.reducer

// types

export interface IMatrixPosition {
    x: number
    y: number
}

export interface IGameState {
    matrix: GameSymbols[][]
    sequences: string[]
    puzzle_id: string
    sorter: number[]
    selected: boolean[][]
}

interface IPuzzleResponse {
    matrix: GameSymbols[][]
    sequences: string[]
    puzzle_id: string
}
