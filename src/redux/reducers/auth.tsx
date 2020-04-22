import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// utils
import axios from '../../utils/axiosInstance'
import { getUser, clearUser, setUser } from '../../utils/storage'

export const signUp = createAsyncThunk('auth/signUp', async (payload: ISignUpPayload) => {
    return axios.post('/user/register', payload)
})

export const signIn = createAsyncThunk('auth/signIn', async (payload: ISignInPayload) => {
    return axios.post('/user/authenticate', payload)
})

export const signOut = createAsyncThunk('auth/signOut', async () => {
    return () => clearUser()
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        registered: false,
        user: getUser(),
    } as IAuthState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(signUp.fulfilled, (state) => {
            state.registered = true
        })
        addCase(signIn.fulfilled, (state, { payload }: any) => {
            setUser(payload)
            state.user = payload
        })
        addCase(signOut.fulfilled, (state) => {
            clearUser()
            state.user = null
        })
    },
})

export default authSlice.reducer

// types
export interface IAuthState {
    registered: boolean
    user: IAuthUser | null
}

export interface IAuthUser {
    level: number
    _id: string
    name: string
    email: string
    country: string
    __v: number
    token: string
}

export interface ISignInPayload {
    name: string
    password: string
}

export interface ISignUpPayload {
    name: string
    email: string
    password: string
    country: string
}
