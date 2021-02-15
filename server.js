const express = require('express');
const app = express();
const path = require('path');
const { bot } = require('./bot.js')
const { getSerie } = require('./getSerie.js')


bot()
const timeInterval = 1000 * 60 * 60 * 3 
setInterval(bot, timeInterval)

app.use('/image', express.static('img'));
app.use('/css', express.static('css'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/gerador', async function (req, res) {
    console.log("Got a GET request for the homepage");
    await getSerie();

    
    res.sendFile(path.join(__dirname + '/geraSerie.html'));
 })
const porta = process.env.PORT || 3000
const server = app.listen(porta, function(){
    console.log(`localhost:${porta}`)
});