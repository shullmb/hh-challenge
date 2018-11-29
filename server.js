require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3001

require('./config/database')

// app.use('/api/swatches', require('./routes/api'))

app.listen( port, () => {
	console.log(`serving swatches on ${port}`)
})