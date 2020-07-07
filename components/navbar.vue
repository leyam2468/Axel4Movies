<template>
    <div>
        <b-navbar toggleable="lg" type="dark">
            <b-container>
                <b-navbar-brand href="#" class="logo"
                    >Axel <span>4</span> Design</b-navbar-brand
                >

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto font-weight-bold">
                        <b-nav-item to="/" active="">الصفحة الرئسية</b-nav-item>
                        <b-nav-item to="/videos">المضاف حديثا</b-nav-item>
                        <b-nav-item to="/">المسلسلات</b-nav-item>
                        <b-nav-item to="/">البرامج التلفزيونية</b-nav-item>
                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
    width: 100%;
    height: 50px;
    background: linear-gradient(
        0deg,
        rgba(33, 33, 33, 0) 0%,
        rgba(33, 33, 33, 1) 100%
    );
    color: white;
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
        a {
            text-decoration: none;
            color: white;
            padding: 0 15px;
            font-weight: bold;
        }
    }
}
</style>
