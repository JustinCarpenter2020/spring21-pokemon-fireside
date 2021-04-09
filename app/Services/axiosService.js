// @ts-ignore
export const _pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5000
})

// @ts-ignore
export const _bcwApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/classroom/",
  timeout: 5000
})