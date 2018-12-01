require('dotenv').config() // for dev db seeding
const mongoose = require('mongoose');
const Swatch = require('../models/swatch');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

Swatch.deleteMany({}, (err) => err ? console.log(err) : 'Collection removed')

// generate 4096 colors
// const SWATCHES = []
// for (let i = 0; i < 256; i += 16) {
// 	let r = i
// 	for (let j = 0; j < 256; j += 16) {
// 		let g = j
// 		for (let k = 0; k < 256; k += 16) {
// 			let b = k
// 			SWATCHES.push({ r, g, b })
// 		}
// 	}
// }

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
