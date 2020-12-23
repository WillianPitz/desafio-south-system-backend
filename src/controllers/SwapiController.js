const axios = require('axios');

async function getAll(req, res) {
  const people = axios('https://swapi.dev/api/people/')
  const planets = axios('https://swapi.dev/api/planets/')
  const films = axios('https://swapi.dev/api/films/')
  const species = axios('https://swapi.dev/api/species/')
  const data = await Promise.all([people, planets, films, species]).then((values) => {
    return values.map(({ data }, i) => {
      return {
        title: getTitle(i),
        path: getPath(i),
        imgSrc: getImgSrc(i),
        items: data.results
      }
    })
  })
  return res.json(data)
}

async function getPersonById(req, res) {
  var id = req.params.id;
  const { data } = await axios(`https://swapi.dev/api/people/${id}/`)
  return res.json(data)
}

async function getPlanetById(req, res) {
  var id = req.params.id
  const { data } = await axios(`https://swapi.dev/api/planets/${id}`)
  return res.json(data)
}

async function getFilmById(req, res) {
  var id = req.params.id;
  const { data } = await axios(`https://swapi.dev/api/films/${id}/`)
  return res.json(data)
}

async function getSpecieById(req, res) {
  var id = req.params.id;
  const { data } = await axios(`https://swapi.dev/api/species/${id}/`)
  return res.json(data)
}

function getTitle(key) {
  switch (key) {
    case 0:
      return 'Personagens:'
    case 1:
      return 'Planetas:'
    case 2:
      return 'Filmes:'
    case 3:
      return 'Espécies:'
    default:
      break;
  }
}

function getPath(key) {
  switch (key) {
    case 0:
      return 'people'
    case 1:
      return 'planets'
    case 2:
      return 'films'
    case 3:
      return 'species'
    default:
      break;
  }
}

function getImgSrc(key) {
  switch (key) {
    case 0:
      return 'people'
    case 1:
      return 'planets'
    case 2:
      return 'films'
    case 3:
      return 'species'
    default:
      break;
  }
}

module.exports = { getAll, getPersonById, getPlanetById, getFilmById, getSpecieById }