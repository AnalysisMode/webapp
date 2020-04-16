import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// utils
import axios from '../../utils/axiosInstance'
// types
import { GameSymbols } from '../../views/GameBeta/GameMatrixBlock'

// export const getMatrix = createAsyncThunk('auth/siginIn', async (payload: ISignInPayload) => {
//     return axios.post('/user/authenticate', payload)
// })

const matrix = [
    ['=', '=', '=', 'â—¯', 'â–²', 'W', 'M', 'â–¼'],
    ['â—‰', 'M', 'M', '+', 'â–²', 'â–¼', 'â–²', '-'],
    ['â—‰', 'â–¼', '=', 'M', 'â–¼', '=', 'W', '='],
    ['+', 'M', 'â—¯', 'â—¯', 'â–¼', 'W', '=', 'â–²'],
    ['â–²', 'W', 'â—‰', 'M', 'â–²', '=', 'â—‰', 'â–²'],
    ['â—¯', '=', 'â—¯', 'W', 'â—¯', 'â–²', 'â—‰', '='],
    ['â—¯', 'M', 'â–²', 'W', 'W', 'W', 'â—¯', '='],
    ['â–¼', 'M', 'â–¼', 'â—¯', 'â—¯', 'â—¯', '-', 'â—¯'],
]

const gameSlice = createSlice({
    name: 'auth',
    initialState: {
        matrix: matrix,
        selected: [],
    } as IGameState,
    reducers: {
        swapRows: ({ matrix }, action) => {
            const [sIndex, dIndex] = action.payload as [number, number]
            const temp = matrix[sIndex]
            if (sIndex > dIndex) {
                for (let i = sIndex; i > dIndex; i--) matrix[i] = matrix[i - 1]
            }
            if (sIndex < dIndex) {
                for (let i = sIndex; i < dIndex; i++) matrix[i] = matrix[i + 1]
            }
            matrix[dIndex] = temp
        },
    },
    // extraReducers: ({ addCase }) => {
    //     addCase(siginIn.fulfilled, (state, { payload }: any) => {
    //         state.user = payload
    //         state.token = payload.token
    //     })
    // },
})

export const { swapRows } = gameSlice.actions

export default gameSlice.reducer

// types

export interface IMatrixPosition {
    x: number
    y: number
}

export interface IGameState {
    matrix: GameSymbols[][]
    selected: IMatrixPosition[]
}
