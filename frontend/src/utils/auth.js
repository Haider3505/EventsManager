import { redirect } from "react-router-dom"

const getAuthToken = () => {
    return localStorage.getItem('token')
}

export const tokenLoader = () => getAuthToken()

export const checkAuthLoader = () => {
    const token = getAuthToken()
    if (!token)
        return redirect('/')

    return null
}

export default getAuthToken