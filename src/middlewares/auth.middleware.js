const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    const rawToken = req.headers.authorization.substr(7)
    const authUser = jwt.verify(rawToken, process.env.APP_KEY || 'development')
    if (authUser) {
      req.authUser = authUser
      next()
    } else {
      res.status(401).json({
        success: false,
        message: 'Unauthorized'
      })
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    })
  }
}
