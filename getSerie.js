const { createImage } = require('./createImage.js')
const { getShow } = require('./tvmazeService.js')



const getSerie = async () => {

    const getData = async () => {
        const showNumber = Math.floor(Math.random() * 9999)
        const showData = await getShow(showNumber)
        return showData;

    }

    const showData = await getData()
    await createImage(showData)
    


}
module.exports = { 
    getSerie: getSerie
}



