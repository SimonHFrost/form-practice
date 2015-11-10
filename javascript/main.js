var avatarLookup = require( './avatar-lookup' )
var enhancedSelectComponent = require( './enhanced-select-component' )
var dateValidation = require( './date-validation' )
var passwordStrength = require( './password-strength' )
var overEighteenCheck = require( './over-eighteen-check' )

avatarLookup({
  imageElement: '#avatar',
  emailElement: '[name="email"]'
})

enhancedSelectComponent({
  nationalityElement: '[name="nationality"]'
})

dateValidation({
  dateElement: '[name="birthdate"]',
  formElement: 'form'
})

passwordStrength({
  passwordElement: '[name="password"]'
})

overEighteenCheck({
  dateElement: '[name="birthdate"]',
  formElement: 'form'
})
