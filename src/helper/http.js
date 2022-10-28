import axios from 'axios';

const http = () => {
  return axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
  })
}

export default http;