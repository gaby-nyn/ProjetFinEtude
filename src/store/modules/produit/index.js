import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {

        };
    },
    actions: {
        getProduit({commit}, id) {
            axios.get(commit, id)
        }
    }
}