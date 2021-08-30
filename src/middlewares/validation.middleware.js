const { validationResult, matchedData } = require('express-validator')

module.exports = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      message: 'An error occurred',
      errors: errors.array()
    })
  } else {
    req.matchedData = matchedData(req)
    next()
  }
}
