import axios from 'axios'

export default axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '31329225-ada8712aea9212be1fe2a7ec7',
    }

})



   