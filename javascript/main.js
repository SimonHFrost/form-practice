var fetchAvatar = require( './fetch-avatar' )
var prepareSelect = require( './prepare-select' )
var prepareDateValidation = require( './prepare-date-validation' )

fetchAvatar({
  imageElement: '#avatar',
  emailElement: '[name="email"]'
})

prepareSelect({
  nationalityElement: '[name="nationality"]'
})

prepareDateValidation({
  dateElement: '[name="birthdate"]',
  formElement: 'form'
})
