const express = require('express')
const router = express.Router()
const Picture = require('../models/Picture')

// Index: GET all the bookmarks
router.get('/', async (req, res, next) => {
    try {
        const pictures = await Picture.find({}) // 1. Get all of the gifs from the DB
	    res.json(pictures)// 2. Send them back to the client as JSON
    } catch(err) {
        next(err) // 3. If there's an error pass it on!
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const picture = await Picture.findById(req.params.id) 
	if(picture) {
        res.json(picture)
    } else {
        res.sendStatus(404)
    }
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newPicture = await Picture.create(req.body)
        res.status(201).json(newPicture)
    } catch(err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try { 
        const pictureToUpdate = await Picture.findOneAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        )
        if (pictureToUpdate) {
            res.json(pictureToUpdate)
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
	
})

router.delete('/:id', async (req, res, next) => {
    try {
        const pictureToDelete = await Picture.findByIdAndDelete(req.params.id)
        console.log(pictureToDelete)
        if (pictureToDelete) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch(err){
        next(err)
    }
})

module.exports = router
