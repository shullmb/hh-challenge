const express = require('express');
const router = express.Router();
const Swatch = require('../models/swatch');

router.get('/', (req,res) => {
	Swatch.find({}, (err, swatches) => {
		err ? console.log(err) : res.json(swatches);
	})
})

module.exports = router;