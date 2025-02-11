const bcrypt = require('bcryptjs')

class PasswordService {
	static async hashPassword(password) {
		const saltRounds = 10
		
		const hashedPassword = await bcrypt.hash(password, saltRounds)
		console.log(password, ' Hashed: ', hashedPassword)
		return hashedPassword
	}

	static async comparePassword(plainPassword, hashedPassword) {
		return await bcrypt.compare(plainPassword, hashedPassword)
	}
}

module.exports = PasswordService
