import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getTrending() {
        return apiClient.get(
            '/trending/all/day?api_key=e248b861c3ca5e9cf5bb0113718abaf2'
        )
    },
}
