import { redirect } from "react-router-dom"

export const getTokenDuration = () => {
    const storedExpirationDate = localStorage.getItem('expiration')
    const expirationDate = new Date(storedExpirationDate)
    const now = new Date()
    const duration = expirationDate.getTime() - now.getTime()

    return duration
}

const getAuthToken = () => {
    const token = localStorage.getItem('token')

    const duration = getTokenDuration()

    if (!token) {
        return null
    }

    if (duration < 0) {
        return 'EXPIRED'
    }

    return token
}

export const tokenLoader = () => getAuthToken()

export const checkAuthLoader = () => {
    const token = getAuthToken()
    if (!token)
        return redirect('/')

    return null
}

export default getAuthToken