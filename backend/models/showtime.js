const mongoose = require('mongoose')

const showtimeSchema = new mongoose.Schema({
	movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
	cinema: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Cinema',
		required: true
	},
	hall: { type: mongoose.Schema.Types.ObjectId, ref: 'Hall', required: true },
	startTime: { type: Date, required: true },
	endTime: { type: Date, required: true },
	availableSeats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat' }],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})

const Showtime = mongoose.model('Showtime', showtimeSchema)
module.exports = Showtime
