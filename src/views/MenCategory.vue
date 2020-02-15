<template>
<div>
    <h1 class="title">Men's</h1>
    <div class="columns">
        <div class="column is-one-fifth">
                <div name="FilterBrand">
                    <h2 class="subtitle">Brands</h2>
                    <div>        
                        <label class="radio">
                            <input type="radio" name="Brand" value="Nike" v-model="brand">
                            Nike
                        </label>
                    </div>
                    <div>
                        <label class="radio">
                            <input type="radio" name="Brand" value="Adidas" v-model="brand">
                            Adidas
                        </label>
                    </div>
                    <div>
                        <label class="radio">
                            <input type="radio" name="Brand" value="Puma" v-model="brand">
                            Puma
                        </label>
                    </div>
                    <div>
                        <label class="radio">
                            <input type="radio" name="Brand" value="UnderArmour" v-model="brand">
                            Under Armour
                        </label>                        
                    </div>
                </div>
                <div name="FilterShoe">
                    <h2 class="subtitle">Shoe type</h2>
                    <div>        
                        <label class="radio">
                            <input type="radio" name="Type" value="Sandale" v-model="type">
                            Sandale
                        </label>
                    </div>
                    <div>
                        <label class="radio">
                            <input type="radio" name="Type" value="Botte" v-model="type">
                            Botte
                        </label>
                    </div>
                    <div>
                        <label class="radio">
                            <input type="radio" name="Type" value="Sport" v-model="type">
                            Sport
                        </label>
                    </div>
                    <div>
                        <label class="radio">
                            <input type="radio" name="Type" value="Casual" v-model="type">
                            Casual
                        </label>                        
                    </div>
                    <div>
                        <label class="radio">
                            <input type="radio" name="Type" value="Formal" v-model="type">
                            Formal
                        </label>                        
                    </div>        
                </div>
                <input class="button is-info" type="button" value="Filter" v-on:click="filter">
                <input class="button is-danger" type="button" value="Remove filter" v-on:click="removeFilter">
        </div>
        <div class="column">                        
            <div class="tile is-parent" v-bind:key="item.id" v-for="item in products">
                <Item v-bind:item="item"/>
            </div>
        </div>      
    </div>
</div>
</template>

<script>
import Item from '@/components/Item.vue'
import axios from 'axios'
export default {
    components: {
        Item,
    },
    data() {
        return {
            products : [],
            type: '',
            brand: '',
            product: {},
        };
    },
    computed: {
        
    },
    methods: {
        filter() {
            this.products = [];
            axios.get("/api/Produits")
            .then((response) =>{
                for (let i = 0; i < response.data.length; i += 1) {
                    if(response.data[i].categorie == 'Homme') {
                        if(response.data[i].typeSoulier == this.type || response.data[i].marque == this.brand)
                        this.products.push(response.data[i]);
                    }
                }
            });           
        },
        removeFilter() {
            location.reload();
        },
    },
     created() {
         axios.get("/api/Produits")
         .then((response) =>{
             for (let i = 0; i < response.data.length; i += 1) {
                 if(response.data[i].categorie == 'Homme') {
                     this.products.push(response.data[i]);
                 }
             }
         });
     },
}
</script>

<style scoped>
div [name="FilterBrand"] {
    padding-bottom: 50px;
}
.item {
    padding-left: 20px;
}
</style>