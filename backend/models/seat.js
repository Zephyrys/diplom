const mongoose = require('mongoose')

const seatSchema = new mongoose.Schema({
	row: { type: Number, required: true },
	number: { type: Number, required: true },
	type: { type: String, enum: ['standard', 'VIP'], required: true },
	available: { type: Boolean, default: true },
	price: { type: Number, required: true },
	createdAt: { type: Date, default: Date.now }
})

const Seat = mongoose.model('Seat', seatSchema)
module.exports = Seat
