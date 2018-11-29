require('dotenv').config()
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3001

const app = express()

require('./config/database')

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.use('/api/swatches', require('./routes/api'))

app.listen( port, () => {
	console.log(`serving swatches on ${port}`)
})