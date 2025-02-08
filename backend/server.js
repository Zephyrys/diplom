const express = require('express')

require('./config/dotenv')
const connectDB = require('./config/db')

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server had started. PORT:${PORT}`)
})
