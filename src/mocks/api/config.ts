const apiHandler = (path: string) => {
    const prefix = `/api/v1${path}`

    return new URL(prefix, import.meta.env.VITE_APP_API_MOCK).toString()
}

export default apiHandler;