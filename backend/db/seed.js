const seed = require('./data.json')
const Wine = require('../models/Wine')

Wine.deleteMany({})
.then(() => {
    Wine.create(seed)
    .then(wines => {
        console.log(wines)
        process.exit()
    })
})