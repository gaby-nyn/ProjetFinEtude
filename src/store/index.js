import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import authentification from './modules/authentification'
import commande from './modules/commande'
import facture from './modules/facture'
import produit from './modules/produit'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
        fakeaction(){
            axios.get();
        }
    },
    modules: {
        authentification,
        commande,
        facture,
        produit
    }        
})