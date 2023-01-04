import { createStore } from 'vuex'
import pokemon from './modules/pokemon.js'

const storeOptions = {
    strict: true,
    state() {
        return {
        }
    },
    mutations: {
    },
    getters: {
    },
    modules: {
        pokemon,
    }
}
// Create a new store instance.
const store = createStore(storeOptions)
export default store