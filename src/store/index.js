import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Produit: {},
        listeProduits: [],
    },
    mutations: {
        LISTE_PRODUITS(state, Products) {
            state.listeProduits = Products;
        },
    },
    actions: {
        getListeProduit({ commit }){

            const Products = [];

            axios.get('/api/Produits').then((response) => {
                for (let i = 0; i < response.data.length; i += 1){
                    Products.push(response.data[i]);
                }
                commit('LISTE_PRODUITS', Products);
            });
        }
    },       
})