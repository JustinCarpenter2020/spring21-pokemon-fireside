import PokemonController from "./Controllers/PokemonController.js";
// import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  pokemonController = new PokemonController()
}

window["app"] = new App();
