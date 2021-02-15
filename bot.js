const fs = require("fs");
const { Mbot } = require('./mConection.js')
const { createImage } = require('./createImage.js')
const { getShow } = require('./tvmazeService.js')



const startBot = async () => {

    const getData = async () => {
        const showNumber = Math.floor(Math.random() * 9999)
        const showData = await getShow(showNumber)
        return showData;

    }
    //requisição get
    const showData = await getData()
    await createImage(showData)
    

   
    
    
    // postar o toot
    Mbot.post('media', { file: fs.ReadStream('./img/render.png') } ).then(resp => {
        const id = resp.data.id;
        Mbot.post('statuses', { status: `Serie Aleatória: ${showData.nome} `, media_ids: [id] })
    });
    
}
module.exports = { 
    bot: startBot
}


    


