export const authHeaders = (token?: string) => {
    return {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
    }
}