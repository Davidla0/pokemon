import { httpService } from "./http.service";

export const pokemonService = {
    query,
    get
}

 function query(){
    return httpService.get('pokemons')
}

function get(id){
    return httpService.get(`pokemon/${id}`)
}