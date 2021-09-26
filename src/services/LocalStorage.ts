export default {
    set: (key: string, data: string) => {
        localStorage.setItem(key, data)
    },
    get: (key: string) => {
        return localStorage.getItem(key)
    }
}