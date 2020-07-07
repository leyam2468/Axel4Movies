<template>
    <div class="lastnews my-3">
        <b-row class="m-0 h-100">
            <b-col cols="10"
                ><marquee behavior="" direction="left" class="font-weigt-bold"
                    ><p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Earum quis, voluptate asperiores provident ducimus
                        quibusdam et repellendus cumque qui amet officia porro,
                        debitis doloremque, ad modi atque eligendi quia dicta.
                    </p></marquee
                >
            </b-col>
            <b-col cols="2" class="lastnews-name h-100">اخر الاخبار</b-col>
        </b-row>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.lastnews {
    background: rgba(0, 0, 0, 0.3);
    color: #aaa;
    border-radius: 10px;
    width: 100%;
    height: 30px;

    display: block;
    .lastnews-name {
        color: #fff;
        background-color: #ff434c;
        border-radius: 10px;
        text-align: center;
        font-weight: bold;
        width: 500px;
    }
}
</style>
