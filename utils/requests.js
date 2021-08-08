// import axios from 'axios'
// axios.defaults.baseURL = "https://yts.mx/api/v2"
const suffix = '&sort_by=date_added&limit=50'

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  fetchComedy: {
    title: 'Comedy',
    url: `/list_movies.json?genre=comedy${suffix}`
  },
  fetchScifi: {
    title: 'Sci-fi',
    url: `/list_movies.json?genre=sci-fi${suffix}`
  },
  fetchHorror: {
    title: 'Horror',
    url: `/list_movies.json?genre=horror${suffix}`
  },
  fetchRomance: {
    title: 'Romance',
    url: `/list_movies.json?genre=romance${suffix}`
  },
  fetchAction: {
    title: 'Action',
    url: `/list_movies.json?genre=action${suffix}`
  },
  fetchRomanceMovies: {
    title: 'Thriller',
    url: `/list_movies.json?genre=thriller${suffix}`
  },
  fetchDrama: {
    title: 'Drama',
    url: `/list_movies.json?genre=drama${suffix}`
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/list_movies.json?genre=mystery${suffix}`
  },
  fetchCrime: {
    title: 'Crime',
    url: `/list_movies.json?genre=crime${suffix}`
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/list_movies.json?genre=animation${suffix}`
  },
  fetchAdventure: {
    title: 'Adventure',
    url: `/list_movies.json?genre=adventure${suffix}`
  },
  fetchFantasy: {
    title: 'Fantasy',
    url: `/list_movies.json?genre=fantasy${suffix}`
  },
  fetchComedyRomance: {
    title: 'Comedy-Romance',
    url: `/list_movies.json?genre=comedy-romance${suffix}`
  },
  fetchActionComedy: {
    title: 'Action-Comedy',
    url: `/list_movies.json?genre=action-comedy${suffix}`
  },
  fetchSuperhero: {
    title: 'Superhero',
    url: `/list_movies.json?genre=superhero${suffix}`
  },
};