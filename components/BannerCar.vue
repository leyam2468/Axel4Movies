<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="30000"
            controls
            indicators
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <!-- Slides with custom text -->
            <b-carousel-slide
                v-for="video in videos"
                :key="video.id"
                :img-src="`https://image.tmdb.org/t/p/w780${video.backdrop_path}`"
                :img-alt="video.original_title || video.original_name"
                class="b-carousel-slide-img"
            >
                <b-row>
                    <b-col
                        ><img
                            :src="`https://image.tmdb.org/t/p/w780${video.poster_path}`"
                            alt=""
                            class="w-75"
                    /></b-col>
                    <b-col
                        ><h1>
                            {{ video.original_title || video.original_name }}
                        </h1>
                        <h5>{{ video.overview }}</h5></b-col
                    >
                </b-row>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            slide: 0,
            sliding: null,
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
    },
    computed: mapState({
        videos: (state) => state.videos.videos.results,
    }),
}
</script>

<style lang="scss">
.b-carousel-slide-img > img {
    filter: brightness(0.5);
}
.carousel-caption {
    bottom: 50%;
    margin-bottom: -210px;
}
</style>
