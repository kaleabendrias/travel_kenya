export function isAuthenticated () {
    const token = localStorage.getItem('token')
    if (token) {
        return token && token.length > 10
    }
    return false
}