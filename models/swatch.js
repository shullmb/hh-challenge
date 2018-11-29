const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const swatchSchema = new Schema({
	r: {
		type: Number,
		required: true
	},
	g: {
		type: Number,
		required: true
	},
	b: {
		type: Number,
		required: true
	}
})

module.exports = mongoose.model('Swatch', swatchSchema);
