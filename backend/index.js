const express = require('express')
const parser = require('body-parser')
const app = express()
const cors = require('cors')

const wineController = require('./controllers/wines')

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())

app.get('/', wineController)
app.use('/api/wines/', wineController)

app.listen(3500, () => console.log('Server running on port 3500!'))


///test line
