import { pokemonService } from "@/services/pokemon.service.js";

export default {
    state:{
        pokemons: [],
    },
    mutations:{
        setPokemons(state, { pokemons }){
            state.pokemons = pokemons
        },
        
    },
    actions: {
        async loadPokemons(context){
            const pokemons = await pokemonService.query()
            context.commit({ type: 'setPokemons', pokemons })
        },
    },
    getters:{
        pokemons(state){ return state.pokemons }
    }
}