import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// utils
import axios from '../../utils/axiosInstance'

export const siginIn = createAsyncThunk('auth/siginIn', async (payload: ISignInPayload) => {
    return axios.post('/user/authenticate', payload)
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: '',
    } as IAuthState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(siginIn.fulfilled, (state, { payload }: any) => {
            state.user = payload
            state.token = payload.token
        })
    },
})

export default authSlice.reducer

// types

export interface IAuthState {
    user: IAuthUser | null
    token: string
}

export interface IAuthUser {
    level: number
    _id: string
    name: string
    country: string
    __v: number
    token: string
}

interface ISignInPayload {
    name: string
    password: string
}
