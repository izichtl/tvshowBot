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

module.exports = {
    Mbot: Mbot
}
