const mongoose = require('mongoose')

const hallSchema = new mongoose.Schema({
	name: { type: String, required: true },
	seats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat' }],
	createdAt: { type: Date, default: Date.now }
})

const Hall = mongoose.model('Hall', hallSchema)
module.exports = Hall
