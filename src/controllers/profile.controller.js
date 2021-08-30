let data = {
  fullName: 'Administrator',
  email: 'admin@mail.com',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}

exports.info = (req, res) => {
  return res.json({
    success: true,
    message: 'User profile info',
    results: data
  })
}

exports.update = (req, res) => {
  if (Object.keys(req.matchedData).length) {
    data = {
      ...data,
      ...req.matchedData
    }
    return res.json({
      success: true,
      message: 'Update profile successfully',
      results: data
    })
  } else {
    return res.status(400).json({
      success: false,
      message: 'Update data needed'
    })
  }
}
