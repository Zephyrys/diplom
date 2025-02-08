const mongoose = require('mongoose')

const cinemaSchema = new mongoose.Schema({
	name: { type: String, required: true },
	location: { type: String, required: true },
	halls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hall' }],
	createdAt: { type: Date, default: Date.now }
})

const Cinema = mongoose.model('Cinema', cinemaSchema)
module.exports = Cinema
