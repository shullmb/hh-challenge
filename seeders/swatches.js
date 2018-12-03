require('dotenv').config() // for dev db seeding
const mongoose = require('mongoose');
const Swatch = require('../models/swatch');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

Swatch.deleteMany({}, (err) => err ? console.log(err) : 'Collection removed')

const SWATCHES = []
for (let i = 208; i >= 128; i -= 16) {
	let r = i
	for (let j = 208; j >= 128; j -= 16) {
		let g = j
		for (let k = 208; k >= 128; k -= 16) {
			let b = k
			SWATCHES.push({ r, g, b })
		}
	}
}

Swatch.insertMany(SWATCHES, (err, swatches) => {
	if (err) console.log(err)
	console.log(`🌈 Inserted ${SWATCHES.length} swatches 🌈`)
	process.exit()
})
