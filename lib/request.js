const axios = require('axios').default

const getJoke = () => {
    axios.get('https://api.kanye.rest')
        .then((res) => {
            console.log(res.data.quote)
        })
} 

module.exports = { getJoke }