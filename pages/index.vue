<template>
    <div class="home">
        <b-container>
            <lastnews />
            <BannerCar />
            <VTCard v-for="video in videos" :key="video.id" :video="video" />
        </b-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import lastnews from '@/components/lastnews.vue'
import BannerCar from '@/components/BannerCar.vue'
import VTCard from '@/components/VTCard.vue'
export default {
    components: {
        VTCard,
        BannerCar,
        lastnews,
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
