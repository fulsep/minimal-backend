const { email } = require('./common')

exports.update = {
  fullName: {
    in: ['body'],
    notEmpty: {
      errorMessage: 'Full name cannot be empty'
    },
    isLength: {
      errorMessage: 'Full name should be at least 4 chars long',
      option: {
        min: 4
      }
    },
    optional: { options: { nullable: true } }
  },
  email: {
    ...email,
    notEmpty: {
      errorMessage: 'Email cannot be empty'
    },
    optional: { options: { nullable: true } }
  }
}
