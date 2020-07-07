<template>
    <div class="home">
        <VTCard v-for="video in videos" :key="video.id" :video="video" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import VTCard from '@/components/VTCard.vue'
export default {
    components: {
        VTCard,
    },
    async fetch({ store, error }) {
        try {
            await store.dispatch('videos/fetchVideos')
        } catch (e) {
            error({
                statusCode: 503,
                message: 'Ther Is no Data Found',
            })
        }
    },
    computed: mapState({
        videos: (state) => state.videos.videos.results,
    }),
}
</script>

<style></style>
