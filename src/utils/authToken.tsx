const AUTH_TOKEN_KEY = 'authToken'

export function setAuthToken(token: string) {
    localStorage[AUTH_TOKEN_KEY] = token
}

export function getAuthToken() {
    return localStorage[AUTH_TOKEN_KEY]
}

export function clearAuthToken() {
    delete localStorage[AUTH_TOKEN_KEY]
}
