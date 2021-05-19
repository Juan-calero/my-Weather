import axios from 'axios'

const apiLocais = axios.create({
    baseURL: 'http://api.ipma.pt/open-data/distrits-islands.json'
})

export default apiLocais