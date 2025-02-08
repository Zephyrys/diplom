const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	genre: { type: String, required: true },
	duration: { type: Number, required: true },
	posterUrl: { type: String, required: true },
	rating: { type: Number, min: 1, max: 10 },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie
