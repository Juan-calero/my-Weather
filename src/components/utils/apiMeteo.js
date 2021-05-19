import axios from 'axios'

const apiMeteo = axios.create({
    baseURL: `http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json` 
})

export default apiMeteo