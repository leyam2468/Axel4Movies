<template>
    <div
        class="card"
        :style="{
            backgroundImage:
                'url(' +
                'https://image.tmdb.org/t/p/w200' +
                video.poster_path +
                ')',
        }"
    >
        <div>{{ video.original_title || video.original_name }}</div>
    </div>
</template>

<script>
export default {
    props: {
        video: {
            type: Object,
            default: null,
        },
    },
}
</script>

<style lang="scss" scoped>
.card {
    width: 200px;
    height: 250px;
    display: inline-flex;
    background-color: red;
    margin: 5px;
}
</style>
