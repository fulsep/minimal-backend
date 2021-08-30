const { email } = require('./common')

exports.register = {
  email,
  password: {
    in: ['body'],
    isLength: {
      errorMessage: 'Password should be at least 8 chars long',
      options: {
        min: 8
      }
    }
  }
}

exports.login = {
  email,
  password: {
    in: ['body'],
    notEmpty: {
      errorMessage: 'Password cannot be empty'
    }
  }
}

exports.forgotPassword = {
  email
}
