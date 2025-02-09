const express = require('express')
const cors = require('cors')

require('./config/dotenv')
const connectDB = require('./config/db')

connectDB()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

const userRoutes = require('./routes/userRouter')
const authRoutes = require('./routes/authRouter')

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
	console.log(`Server had started. PORT:${PORT}`)
})
