const axios = require('axios').default
const chalk = require('chalk')

const getJoke = () => {
    axios.get('https://candaan-api.vercel.app/api/text/random')
        .then((res) => {
            console.log(chalk.blue(res.data.data))
        })
} 

module.exports = { getJoke }