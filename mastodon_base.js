require('dotenv').config();
const Mastodon = require('mastodon-api');

//conecta com o mastodon
const Mbot  = new Mastodon({
    client_key: process.env.CLIENT_KEY,
    client_secret: process.env.CLIENT_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    timeout_ms: 60*1000, 
    api_url: 'https://botsin.space/api/v1/',
})

//define o conteudo a ser enviado. 
const parametros = {
    status: 'postagem de texto'
}

Mbot.post('statuses', parametros, (error, data) => {
    if(error){
        console.error(error)
    } else {
        console.log(data)
    }
})

module.exports = {
    Mbot: Mbot
}

console.log('Rodando...')
