const { createCanvas } = require('canvas')
const fs = require("fs");



const createImage = async () => {

    const width = 1200
    const height = 630
    
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')
    
    context.fillStyle = '#000'
    context.fillRect(0, 0, width, height)
    
    const text = 'Ivan Zichtl'
    
    context.font = 'bold 70pt Arial'
    context.textAlign = 'center'
    context.fillStyle = '#fff'
    context.fillText(text, 600, 170)
    
    context.fillStyle = '#fff'
    context.font = 'bold 30pt Arial'
    context.fillText('izichtl.com', 600, 315)
    
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./teste1.png', buffer)
}

module.exports = {
    createImage: createImage
}
