const express = require('express')
const app = express()

// Routers
app.use('/items', require('./items/items'))

app.use(express.static('dist'))

// Server Start
app.listen(3000, () => console.log('Example app listening on port 3000!'))
