<template>
<nav class="navbar has-shadow-custom is-fixed-top" role="navigation" aria-label="dropdown navigation">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <div class="container is-fluid">
        <div class="navbar-brand">
            <a>
            <router-link to="/"><img src="@/assets/logo.jpg" width="120"></router-link>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item is-hoverable">
                    <router-link class="navbar-item" to="/mens">Men's</router-link>
                </div>
                <div class="navbar-item is-hoverable">
                    <router-link class="navbar-item" to="/womens">Women's</router-link>
                </div>
                <div class="navbar-item is-hoverable">
                    <router-link class="navbar-item" to="/kids">Kids'</router-link>
                </div>                                                
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary is-light">
                        <router-link to="/signup">Sign up</router-link>
                    </a>
                    <a class="button is-light">
                        <router-link to="/login">Log in</router-link>
                    </a>
                    <a>
                        <router-link to="/checkout"><i class="fas fa-shopping-cart fa-2x"/></router-link>
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<style scoped>
nav {
    background-color: lightgray;
}
i {
    color: black;
}
</style>