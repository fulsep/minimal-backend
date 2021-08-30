const jwt = require('jsonwebtoken')

exports.login = function (req, res) {
  const { email, password } = req.matchedData
  if (email === 'admin@mail.com' && password === '1234') {
    const token = jwt.sign({ id: 1 }, process.env.APP_KEY || 'development')
    return res.json({
      success: true,
      message: 'Login successfully',
      token
    })
  } else {
    return res.json({
      success: false,
      message: 'Wrong username or password'
    })
  }
}

exports.register = function (req, res) {
  return res.json({
    success: true,
    message: 'Register successfully'
  })
}

exports.forgotPassword = function (req, res) {
  return res.json({
    success: true,
    message: 'Forgot password request sent to email'
  })
}
