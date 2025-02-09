const GlobalController = require('./GlobalController')
const User = require('../models/User')

class UserController extends GlobalController {
	constructor() {
		console.log('UserController initialized')
		super(User)
	}
}

module.exports = UserController
