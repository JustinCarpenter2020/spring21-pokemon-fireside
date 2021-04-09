
export default class Pokemon{
  constructor(data) {
    this._id = data._id
    this.name = data.name
    this.img = data.img || data.sprites.front_shiny
    this.weight = data.weight
    this.types = data.types
    this.user = data.user || null
    this.description = data.desc

}

get ActivePokemonTemplate() {
    let template = ''
    template += `
    <h2 class=" col text-center rounded-bottom border-success border-bottom text-capitalize pb-2">${this.name}</h2>
    <img src="${this.img}" alt="pokemon img" class="img img-fluid">
    <h5 class="p-2">${this.weight}g</h5>
    <h5 class="border-top rounded-lg border-success p-3">Types: `

    this.types.forEach(option => template += `<span class=" border-left border-success pl-2 m-1 rounded text-success text-capitalize">${option.type.name} </span>`)


    template += ` </h5>
        <button class="btn btn-outline-danger border-bottom border-right py-3 px-4 ml-auto rounded-pill"
        onclick="app.pokemonController.catchPokemon()">catch</button>
    `
    return template
}

get MyPokemonTemplate() {
    let template = ''
    template += `
    <div class="col-3 border border-success p-1">
        <h2 class=" col text-center rounded-bottom border-success border-bottom text-capitalize pb-2">${this.name}</h2>
        <img src="${this.img}" alt="pokemon img" class="img img-fluid">
        <h5 class="p-2">${this.weight}g</h5>
        <h5 class="border-top rounded-lg border-success p-3">Types: `

    this.types.forEach(option => template += `<span class=" border-left border-success pl-2 m-1 rounded text-success text-capitalize">${option.type.name} </span>`)


    template += ` </h5>
            <button class="btn btn-outline-warning py-3 px-4 ml-auto rounded-pill"
            onclick="app.pokemonController.releasePokemon('${this._id}')">Release to Wild</button>
        </div>
    `
    return template
}



// we don't need an instance of a pokemon to use this function, refer to controller
static WildPokemonTemplate(name) {
    return `
    <button class="btn btn-outline-success mx-0 my-0" onclick="app.pokemonController.getActivePokemon('${name}')">${name}</button>
    `
}
}