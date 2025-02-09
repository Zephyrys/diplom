const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		showtime: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Showtime',
			required: true
		},
		seats: [
			{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat', required: true }
		],
		totalPrice: { type: Number, required: true },
		status: {
			type: String,
			enum: ['pending', 'confirmed', 'cancelled'],
			default: 'pending'
		},
		payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }
	},
	{
		timestamps: true
	}
)

const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking
