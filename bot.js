const fs = require("fs");
const { Mbot } = require('./mConection.js')
const { createImage } = require('./createImage.js')



const startBot = async () => {

    //requisição get

    //tratar os dados num json

    //enviar os dos para gerar imagem

    await createImage()
    

   
    
    
        
    // postar o toot
    Mbot.post('media', { file: fs.ReadStream('./teste1.png') } ).then(resp => {
        const id = resp.data.id;
        Mbot.post('statuses', { status: '#selfie1', media_ids: [id] })
    });
    
}

startBot()
    


