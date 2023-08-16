
const getAuthToken = () => {
    return localStorage.getItem('token')
}

export const tokenLoader = () => getAuthToken()

export default getAuthToken