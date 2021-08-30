const auth = require('express').Router()
const { login, register, forgotPassword } = require('../controllers/auth.controller')
const { register: registerSchema, login: loginSchema, forgotPassword: forgotPasswordSchema } = require('../validation/auth.schema')
const { checkSchema } = require('express-validator')
const validate = require('../middlewares/validation.middleware')

auth.post('/login', checkSchema(loginSchema), validate, login)
auth.post('/register', checkSchema(registerSchema), validate, register)
auth.post('/forgotPassword', checkSchema(forgotPasswordSchema), validate, forgotPassword)

module.exports = auth
