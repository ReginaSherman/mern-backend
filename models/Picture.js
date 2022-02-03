const mongoose = require('mongoose')

const PicturesSchema = new mongoose.Schema({
    name: String,
    url: String
})

const Picture = mongoose.model('Picture', PicturesSchema)

module.exports = Picture

