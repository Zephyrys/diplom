const User = require('../models/User')
const PasswordService = require('../services/PasswordService')

class AuthController {
	static async register(req, res) {
		try {
			const { name, email, password } = req.body

			const existingUser = await User.findOne({ email })
			if (existingUser) {
				return res.status(400).json({ message: 'User already exists' })
			}

			const hashedPassword = await PasswordService.hashPassword(password)
			const newUser = await User.create({
				name,
				email,
				password: hashedPassword
			})

			res.status(201).json({ message: 'User registered', user: newUser })
		} catch (error) {
			res.status(400).json({ message: error.message })
		}
	}

	static async login(req, res) {
		try {
			const { email, password } = req.body
			const user = await User.findOne({ email })

			if (!user) return res.status(404).json({ error: 'User not found' })

			const isValidPassword = await PasswordService.comparePassword(
				password,
				user.password
			)
			if (!isValidPassword)
				return res.status(401).json({ error: 'Invalid password' })

			res.status(200).json({ message: 'Login successful' })
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
	// TODO
	static async resetPassword(req, res) {
		try {
			const { email, newPassword } = req.body

			const user = await User.findOne({ email })
			if (!user) return res.status(404).json({ error: 'User not found' })
			console.log(user.password)
			user.password = await PasswordService.hashPassword(newPassword)
			await user.save()

			res.status(200).json({ message: 'Password reset successful' })
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
}

module.exports = AuthController
