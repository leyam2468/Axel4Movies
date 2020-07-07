import postsService from '@/services/VideoServes.js'

export const state = () => ({
    videos: [],
})
export const mutations = {
    SET_VIDEOS(state, videos) {
        state.videos = videos
    },
}

export const actions = {
    fetchVideos({ commit }) {
        return postsService.getTrending().then((response) => {
            commit('SET_VIDEOS', response.data)
        })
    },
}
