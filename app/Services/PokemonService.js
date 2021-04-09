import { _bcwApi, _pokeApi } from "./axiosService.js"
import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";

class PokemonService {
  async releasePokemon(id) {
    await _bcwApi.delete('pokemon/' + id)
    ProxyState.myPokemons = ProxyState.myPokemons.filter(pokemon => pokemon._id != id)
  }
  async getMyPokemon() {
    let res = await _bcwApi.get("pokemon")
    ProxyState.myPokemons = res.data.map(p => new Pokemon(p))
  }
  async catchPokemon() {
    let pokeToCatch = ProxyState.activePokemon
    let res = await _bcwApi.post('pokemon', pokeToCatch)
    console.log(res.data)
    this.getMyPokemon()
  }
  async getActivePokemon(name) {
    let res = await _pokeApi.get('pokemon/' + name)
    ProxyState.activePokemon = new Pokemon(res.data)
    console.log(ProxyState.activePokemon)
  }
  async getWildPokemon() {
    let res = await _pokeApi.get('pokemon?limit=151')
    ProxyState.wildPokemons = res.data.results
    console.log(ProxyState.wildPokemons);
  }

}



export const pokemonService = new PokemonService()