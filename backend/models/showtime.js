const mongoose = require('mongoose')

const showtimeSchema = new mongoose.Schema(
	{
		movie: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Movie',
			required: true
		},
		cinema: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Cinema',
			required: true
		},
		hall: { type: mongoose.Schema.Types.ObjectId, ref: 'Hall', required: true },
		startTime: { type: Date, required: true },
		endTime: { type: Date, required: true },
		availableSeats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat' }]
	},
	{
		timestamps: true
	}
)

const Showtime = mongoose.model('Showtime', showtimeSchema)
module.exports = Showtime
