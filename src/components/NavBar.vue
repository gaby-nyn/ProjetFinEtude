<template>
<nav class="navbar has-shadow-custom is-fixed-top" role="navigation" aria-label="dropdown navigation">
    <div class="container is-fluid">
        <div class="navbar-brand">
            <a href="/">
            <img src="@/assets/logo.jpg" width="120px">
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
                </div>
            </div>
        </div>
    </div>
</nav>
</template>