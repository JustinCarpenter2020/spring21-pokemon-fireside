import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import NotificationService from "../Services/NotificationService.js"
import { pokemonService } from "../Services/PokemonService.js"


function _drawWild(){
  // console.log("drawing pokemon")
  let template = ''
  ProxyState.wildPokemons.forEach(p => template += Pokemon.WildPokemonTemplate(p.name))
  document.getElementById("wild-pokemon").innerHTML = template

}

function _drawActive(){
  let activePokemon = document.getElementById('active-pokemon')
  activePokemon.innerHTML = ProxyState.activePokemon.ActivePokemonTemplate
}

function _drawMyPokemon(){
  let template = ''
  ProxyState.myPokemons.forEach(poke => template += poke.MyPokemonTemplate)
  document.getElementById('my-pokedex').innerHTML = template
}

export default class PokemonController {
  constructor(){
    ProxyState.on('wildPokemons', _drawWild)
    ProxyState.on('activePokemon', _drawActive)
    ProxyState.on("myPokemons", _drawMyPokemon)
    this.getWildPokemon()
    this.getMyPokemon()
  }
  async getMyPokemon() {
    try {
      await pokemonService.getMyPokemon()
    } catch (error) {
      console.error(error);
    }
  }
  async getWildPokemon() {
    try {
     await pokemonService.getWildPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  async getActivePokemon(name){
    try {
      await pokemonService.getActivePokemon(name)
    } catch (error) {
      console.error(error)
    }
  }

  async catchPokemon(){
    try {
      pokemonService.catchPokemon()
      NotificationService.toast(`Captured ${ProxyState.activePokemon.name}!`)
    } catch (error) {
      console.error(error)
    }
  }

  async releasePokemon(id){
    try {
      pokemonService.releasePokemon(id)
    } catch (error) {
      console.error(error)
    }
  }




}