const profile = require('express').Router()
const { checkSchema } = require('express-validator')
const { info, update } = require('../controllers/profile.controller')
const validate = require('../middlewares/validation.middleware')
const { update: updateSchema } = require('../validation/profile.schema')

profile.get('/', info)
profile.patch('/', checkSchema(updateSchema), validate, update)

module.exports = profile
