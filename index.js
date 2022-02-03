const express = require('express')

const app = express()
app.set('port', process.env.PORT || 8000)

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.redirect('/pictures')
})


const picturesController = require('./controllers/picturesController')
app.use('/pictures/', picturesController)


app.listen(app.get('port'), () => {
    console.log(`Connected to port ${app.get('port')}`)
})