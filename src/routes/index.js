const routes = require('express').Router()
const authenticated = require('../middlewares/auth.middleware')

routes.use('/auth', require('./auth.router'))
routes.use('/profile', authenticated, require('./profile.router'))

module.exports = routes
