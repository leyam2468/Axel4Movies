<template>
    <div>
        <div class="navbar">
            <div class="logo">Axel<span>4</span>Movies</div>
            <div class="nav-link">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/">Moves</nuxt-link>
                <nuxt-link to="/">Last Moves</nuxt-link>
                <nuxt-link to="/">Tv Show</nuxt-link>
            </div>
        </div>
        <Nuxt />
    </div>
</template>
<style lang="scss">
*,
html,
body {
    box-sizing: border-box;
    margin: 0;
}
.navbar {
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    color: white;
    padding: 0 50px;
    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1.5rem;
        font-weight: bold;
        span {
            color: red;
        }
    }
    .nav-link {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        a {
            text-decoration: none;
            color: white;
            padding: 0 15px;
            font-weight: bold;
        }
    }
}
</style>
