const { createCanvas, loadImage } = require('canvas')
const fs = require("fs");



const createImage = async (data) => {
    let avaliacaoTratado
    let avaliacaoFont
    let generoTratado
    let paisTratado
    let nomeFont = 18


    //trata a fonte do nome
    if(data.nome.length > 22){
        nomeFont = 13
    }
    // trata o genero
    if(data.genero[0] == undefined){
        generoTratado = 'Não Informado'
        
    }   else {
        generoTratado = '|'
        for (let i = 0; i < data.genero.length; i++){
            generoTratado = generoTratado + ` ${data.genero[i]} | `
        }
    }
    //trata a informação de avaliação
    if(data.avaliacao == null){
        avaliacaoTratado = 'Não Informado';
        avaliacaoFont = 15

    }   else{
        avaliacaoTratado = data.avaliacao
        avaliacaoFont = 25
    }
    //trata a informação de pais
    if(data.pais == null){
        paisTratado = 'Não Informado';

    }   else{
        paisTratado = data.pais
    }
    

    const width = 700
    const height = 380
    
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')
    
    context.fillStyle = '#000'
    context.fillRect(0, 0, width, height)
    
    //nome da serie
    const nome = data.nome
    context.font = `bold ${nomeFont}pt Arial`
    context.textAlign = 'center'
    context.fillStyle = '#fff'
    context.fillText(nome, 485, 65)


    //Avaliação  da serie
    const avaliacao = 'Avaliação'
    context.font = 'bold 11pt Arial'
    context.textAlign = 'center'
    context.fillStyle = '#fff'
    context.fillText(avaliacao, 485, 102)
    
    const avaliacaoData = avaliacaoTratado 
    context.font = `bold ${avaliacaoFont}pt Arial`
    context.textAlign = 'center'
    context.fillStyle = '#fc8176'
    context.fillText(avaliacaoData, 485, 135)
    
    // genero da serie
    const genero = 'Genero'
    context.font = 'bold 14pt Arial'
    context.textAlign = 'center'
    context.fillStyle = 'whitesmoke'
    context.fillText(genero, 485, 187)

    const generoData = generoTratado
    context.font = 'bold 13pt Arial'
    context.textAlign = 'center'
    context.fillStyle = '#fc8176'
    context.fillText(generoData, 485, 210)

    // pais da serie
    const pais = 'País'
    context.font = 'bold 14pt Arial'
    context.textAlign = 'center'
    context.fillStyle = 'whitesmoke'
    context.fillText(pais, 485, 239)

    const paisData = paisTratado
    context.font = 'bold 13pt Arial'
    context.textAlign = 'center'
    context.fillStyle = '#fc8176'
    context.fillText(paisData, 485, 262)

    //lingua da serie
    const lingua = 'Língua oficial'
    context.font = 'bold 14pt Arial'
    context.textAlign = 'center'
    context.fillStyle = '#fff'
    context.fillText(lingua, 485, 297)

    const linguaData = data.lingua
    context.font = 'bold 13pt Arial'
    context.textAlign = 'center'
    context.fillStyle = '#fc8176'
    context.fillText(linguaData, 485, 325)

    context.beginPath();
    context.lineWidth = "1";
    context.strokeStyle = "whitesmoke";
    context.rect(40, 25, 620, 335);
    context.stroke();
    
    //capa da serie
    await loadImage(data.imagem).then(image => {
        context.drawImage(image, 70, 43, 210, 295)
      })
    
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./img/render.png', buffer)
}

module.exports = {
    createImage: createImage
}
