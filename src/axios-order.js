import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://to-do-app-185e7-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance