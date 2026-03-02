import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios"

const isProduction = process.env.NODE_ENV === 'production'
console.log('axios isProduction', isProduction)

const instance = axios.create({
    baseURL: 'https://admin.lifecompany.co.kr/api/',
    // baseURL: 'http://192.168.0.54:3000/api/',
    timeout: 60000,
    withCredentials: false,
    responseType: "json",
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json; charset:UTF-8'
    },
} as AxiosRequestConfig)

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers.Accept = 'application/json'
    return config
})

instance.interceptors.response.use(undefined, (error: AxiosError) => {
    if (error.response) {
        const { status, data, config } = error.response

        if (status === 403) {
            console.log("403", data, config)
        }

        if (status === 500) {
            console.log("500", data, config)
        }
    }

    return error.response
})

export default instance