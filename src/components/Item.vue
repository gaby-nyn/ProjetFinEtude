<template>
<div class="tile is-parent">
    <article class="tile is-child notification is-info is-box">
        <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/640x480.png">
        </figure>
        <p class="title">{{ Name }}</p>
        <p class="subtitle">{{ Description }}</p>
    </article>
</div>
</template>
<script>
// import axios from 'axios';
export default {
    data() {
        return {
            Item: {},
            Name: 'AF1',
            Description: 'This is the description',
            Type: '',
            Marque: '',
            Taille: null,
            Prix: null,
            Inventory: null,
            Photo: '',
            Selected: null,
            Category: '',
        };
    }
}
</script>