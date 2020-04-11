import axios from 'axios'
import { setAuthToken, getAuthToken } from './authToken'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

/* request interceptor */
instance.interceptors.request.use(function (request) {
    const authToken = getAuthToken()
    if (authToken) {
        Object.assign(request.headers, {
            Authorization: 'Bearer ' + authToken,
        })
    }
    return request
})

/* response interceptor */
instance.interceptors.response.use(({ headers, data }) => {
    if (headers['token']) setAuthToken(headers['token'])
    return data
})

export default instance
