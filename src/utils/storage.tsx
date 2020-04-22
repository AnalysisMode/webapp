import { IAuthUser } from '../redux/reducers/auth'

const AUTH_TOKEN_KEY = 'authToken'
const USER_KEY = 'user'

export function setAuthToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY)
}

export function clearAuthToken() {
    localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function getUser(): IAuthUser | null {
    const user = localStorage.getItem(USER_KEY)

    if (user) {
        return JSON.parse(user)
    }

    return null
}

export function setUser(user: object) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function clearUser() {
    localStorage.removeItem(USER_KEY)
}
