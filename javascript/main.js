var fetchAvatar = require( './fetch-gravatar' )
var prepareSelect = require( './prepare-select' )
var prepareDateValidation = require( './prepare-date-validation' )

fetchAvatar({
  emailSelectorQuery: '#avatar',
  avatarSelectorQuery: '[name="email"]'
})

prepareSelect({
  query: '[name="nationality"]'
})

prepareDateValidation({
  query: '[name="birthdate"]',
  form: 'form'
})
