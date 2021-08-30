require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

app.use('/', require('./src/routes'))

const PORT = process.env.APP_PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
